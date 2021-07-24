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
  mongo: {
    uri: process.env.NODE_ENV === 'test' ? process.env.MONGO_URI_TESTS : process.env.MONGO_URI,
  },
  mongoAliasUri: `mongodb+srv://${process.env.MONGO_USER_ALIAS}:${process.env.MONGO_PWD_ALIAS}@cluster0.mku0m.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,

  facebook: {
    id: process.env.FACEBOOK_ID,
    secret: process.env.FACEBOOK_SECRET,
  },

  session: {
    key: process.env.COOKIE_KEY,
    secret: process.env.COOKIE_SECRET,
    age: 86400000,
  },
  mailJet: {
    key: process.env.MJ_APIKEY_PUBLIC,
    secret: process.env.MJ_APIKEY_PRIVATE,
  },

  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',

  fileLimitSize: 40485760, // 5mb

  frontend: process.env.MEAN_FRONTEND || 'reactJs',

  mongooseDebug: process.env.MONGOOSE_DEBUG,

  staticUrl: process.env.STATIC_URL,

  clientHomePathUrl: process.env.NODE_ENV === 'production' ? 'domain' : process.env.CLIENT_HOME_PAGE_URL,
};
