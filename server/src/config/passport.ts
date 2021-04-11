import passport from 'passport';
import userModel from '../models/users.model';
import passportFacebook from 'passport-facebook';
import HttpException from '../exceptions/HttpException';
import { config } from './config';
import { isEmpty } from '../utils/util';
import { User } from '../interfaces/users.interface';

const FacebookStrategy = passportFacebook.Strategy;

const { facebook } = config;
// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser<any, any>((req, user, done) => {
  done(undefined, user);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  userModel
    .findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(() => {
      done(new HttpException(401, 'Failed to deserialize an user'));
    });
});

/**
 * OAuth Strategy Overview
 *
 * - User is already logged in.
 *   - Check if there is an existing account with a provider id.
 *     - If there is, return an error message. (Account merging not supported)
 *     - Else link new OAuth account with currently logged-in user.
 * - User is not logged in.
 *   - Check if it's a returning user.
 *     - If returning user, sign in and we are done.
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */

/**
 * Sign in with Facebook.
 */
passport.use(
  new FacebookStrategy(
    {
      // options for facebook strategy
      clientID: facebook.id,
      clientSecret: facebook.secret,
      callbackURL: '/auth/facebook/redirect',
      profileFields: ['id', 'name', 'email', 'photos', 'link', 'locale', 'timezone'],
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      // find current user in UserModel
      const currentUser: User = await userModel.findOne({
        facebookId: profile.id,
      });
      // const findUser: User = await userModel.findOne({ email: 'ltk.gym@gmail.com' });
      // create new user if the database doesn't have this user
      if (isEmpty(currentUser)) {
        const newUser = await new userModel({
          firstName: profile._json.first_name,
          lastName: profile._json.last_name,
          facebookId: profile.id,
        }).save();
        if (!isEmpty(newUser)) {
          done(null, newUser);
        } else {
          done(null, false);
        }
      }
      done(null, currentUser);
    },
  ),
);
export { passport };
