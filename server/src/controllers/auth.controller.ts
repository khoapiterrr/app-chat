import { NextFunction, Request, Response } from 'express';
import { CreateUserDto, LoginUserDto } from '../dtos/users.dto';
import AuthService from '../services/auth.service';
import { User } from '../interfaces/users.interface';
import { ChangePasswordDto, RequestWithUser } from '../interfaces/auth.interface';

class AuthController {
  public authService = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    const userData: CreateUserDto = req.body;

    try {
      const signUpUserData: User = await this.authService.signup(userData);
      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    const userData: LoginUserDto = req.body;
    try {
      const findUser = await this.authService.login(userData);
      // findUser['password'] = '';
      delete findUser.password;
      res.status(200).json({ data: findUser, message: 'login' });
    } catch (error) {
      next(error);
    }
  };
  public handleLoginWithFacebook = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userData: any = req.body;
    try {
      const findUser = await this.authService.loginWithFb(userData);
      // findUser['password'] = '';
      delete findUser.password;
      res.status(200).json({ data: findUser, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public getCurrentAuth = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ data: req.user, message: 'get current auth' });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userData: User = req.user;

    try {
      const logOutUserData: User = await this.authService.logout(userData);
      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };

  public loginSuccess = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userData: User = req.user;

    try {
      if (userData) {
        const data = await this.authService.findUserAndGenerateToken(userData);
        res.status(200).json({ data, message: 'login success' });
      }
      res.status(401).json({ message: 'user failed to authenticate.' });
    } catch (error) {
      next(error);
    }
  };

  public loginFailed = async (req: Request, res: Response) => {
    res.status(401).json({
      success: false,
      message: 'user failed to authenticate.',
    });
  };
  public changePassword = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userData: User = req.user;
    const data: ChangePasswordDto = req.body;
    try {
      const objReturn = await this.authService.changePassword(data, userData._id);
      res.status(200).json({ data: objReturn, message: 'Đổi mật khẩu thành công' });
    } catch (error) {
      next(error);
    }
  };

  public restorePassword = async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    try {
      const objReturn = await this.authService.restorePassword(email);
      res.status(200).json({ data: objReturn, message: 'Restore password' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
