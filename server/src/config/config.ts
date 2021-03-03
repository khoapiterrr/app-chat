import path from 'path';
import dotenvSafe from 'dotenv-safe';

// Load environment configuration
dotenvSafe.config({
  path: path.resolve(__dirname, '../../.env'),
  example: path.resolve(__dirname, '../../.env.dev'),
});

export const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION,
  mongo: {
    uri: process.env.NODE_ENV === 'test' ? process.env.MONGO_URI_TESTS : process.env.MONGO_URI,
  },
  google: {
    id: process.env.GOOGLE_ID,
    secret: process.env.GOOGLE_SECRET,
  },
  facebook: {
    id: process.env.FACEBOOK_ID,
    secret: process.env.FACEBOOK_SECRET,
  },
  github: {
    id: process.env.GITHUB_ID,
    secret: process.env.GITHUB_SECRET,
  },
  emailConfig: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
  },

  session: {
    key: process.env.COOKIE_KEY,
    secret: process.env.COOKIE_SECRET,
    age: 86400000,
  },

  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',

  fileDirectory: process.env.FILES_DIRECTORY,
  fileLimitSize: 40485760, // 5mb

  frontend: process.env.MEAN_FRONTEND || 'reactJs',

  mongooseDebug: process.env.MONGOOSE_DEBUG,

  staticUrl: process.env.STATIC_URL,

  clientHomePathUrl: process.env.NODE_ENV === 'production' ? 'domain' : process.env.CLIENT_HOME_PAGE_URL,
};
