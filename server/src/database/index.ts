import { config } from '../config/config';
export const dbConnection = {
  // url: `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`,
  url: config.mongoAliasUri,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
};
