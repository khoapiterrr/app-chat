import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { CreateUserDto, LoginUserDto } from '../dtos/users.dto';
import HttpException from '../exceptions/HttpException';
import { ChangePasswordDto, DataStoredInToken, TokenData } from '../interfaces/auth.interface';
import { mailRestorePwd } from '../interfaces/mail.interface';
import { User } from '../interfaces/users.interface';
import { sendMailRestorePassword } from '../libs/mail.service';
import userModel from '../models/users.model';
import { isEmpty, makeIdRandom } from '../utils/util';
import FriendService from './friend.service';

class AuthService {
  public users = userModel;
  public friendService = new FriendService();

  public async signup(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    const hashedPassword: string = await bcrypt.hash(userData.password, 10);
    const createUserData: User = await this.users.create({
      ...userData,
      password: hashedPassword,
    });
    this.friendService.addDefaultFriend(createUserData._id);
    return createUserData;
  }

  public async login(userData: LoginUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ email: userData.email });
    if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);

    const isPasswordMatching: boolean = await bcrypt.compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

    const tokenData = this.createToken(findUser);

    findUser.token = tokenData.token;

    return findUser;
  }

  public async loginWithFb(userData: any): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    let findUser: User = await this.users.findOne({
      email: userData.email,
      facebookId: userData.facebookId,
    });
    //create new user
    if (!findUser) {
      findUser = await this.users.create({
        ...userData,
      });
    }

    const tokenData = this.createToken(findUser);

    findUser.token = tokenData.token;

    return findUser;
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ password: userData.password });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async findUserAndGenerateToken(userData): Promise<User> {
    const { _id } = userData;
    const findUser = await this.users.findById(_id);
    findUser.token = this.createToken(_id).token;
    return findUser.save();
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secret: string = process.env.JWT_SECRET;
    const expiresIn: number = 60 * 60 * 7 * 12;

    return { expiresIn, token: jwt.sign(dataStoredInToken, secret, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
  public async changePassword(data: ChangePasswordDto, userId: string): Promise<User> {
    const findUser = await this.users.findById(userId);

    const isPasswordMatching: boolean = await bcrypt.compare(data.currentPassword, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Mậu khẩu cũ không chính xác');

    const hashedPassword: string = await bcrypt.hash(data.newPassword, 10);

    findUser.password = hashedPassword;

    const dataReturn: User = await findUser.save();

    return dataReturn;
  }

  public async restorePassword(email: string): Promise<any> {
    const findUser = await this.users.findOne({ email: email });
    if (!findUser) {
      throw new HttpException(400, 'Email không tồn tại, vui lòng nhập chính xác.');
    }
    const randomPwd = makeIdRandom(10);
    const hashedPassword: string = await bcrypt.hash(randomPwd, 10);

    findUser.password = hashedPassword;

    const dataReturn: User = await findUser.save();

    const mailRestorePwd: mailRestorePwd = {
      email: email,
      fullName: `${dataReturn.firstName} ${dataReturn.lastName}`,
      newPassword: randomPwd,
    };
    const resMail = await sendMailRestorePassword(mailRestorePwd);
    return resMail;
  }
}

export default AuthService;
