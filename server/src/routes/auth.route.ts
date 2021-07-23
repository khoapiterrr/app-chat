import { Router } from 'express';
import { passport } from '../config/passport';
import AuthController from '../controllers/auth.controller';
import { CreateUserDto, LoginUserDto } from '../dtos/users.dto';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';
import { config } from '../config/config';

const { clientHomePathUrl } = config;
class AuthRoute implements Route {
  public path = '/auth';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/signup', validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
    this.router.post('/login', validationMiddleware(LoginUserDto, 'body'), this.authController.logIn);

    this.router.post('/logout', authMiddleware, this.authController.logOut);

    this.router.get('/me', authMiddleware, this.authController.getCurrentAuth);
    this.router.put('/change-password', authMiddleware, this.authController.changePassword);
    this.router.get(
      '/facebook',
      passport.authenticate('facebook', {
        scope: ['public_profile', 'email'],
      }),
    );

    this.router.get(
      '/facebook/redirect',
      passport.authenticate('facebook', {
        successRedirect: clientHomePathUrl,
        failureRedirect: '/auth/login/failed',
      }),
    );

    this.router.get('/login/success', this.authController.loginSuccess);
    this.router.get('/login/failed', this.authController.loginFailed);
    this.router.get('/logout', (req, res) => {
      req.logout();
      res.redirect(clientHomePathUrl);
    });
  }
}

export default AuthRoute;
