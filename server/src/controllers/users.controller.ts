import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '../dtos/users.dto';
import { RequestWithUser } from '../interfaces/auth.interface';
import { User } from '../interfaces/users.interface';
import userService from '../services/users.service';

class UsersController {
  public userService = new userService();

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id;

    try {
      const findOneUserData: User = await this.userService.findUserById(userId);
      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    const userData: CreateUserDto = req.body;

    try {
      const createUserData: User = await this.userService.createUser(userData);
      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id;
    const userData: User = req.body;

    try {
      const updateUserData: User = await this.userService.updateUser(userId, userData);
      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id;

    try {
      const deleteUserData: User = await this.userService.deleteUserData(userId);
      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };

  public findFriend = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const response = await this.userService.findFriend(req.user, req.pagination);
      res.status(200).json({ data: response, message: 'findFriend' });
    } catch (error) {
      next(error);
    }
  };
  public findFriendSuggestions = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const response = await this.userService.friendSuggestions(req.user._id);
      res.status(200).json({ data: response, message: 'findFriendSuggestions' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
