import 'dotenv/config';
import App from './app';
import AuthRoute from './routes/auth.route';
import ContactRoute from './routes/contact.route';
import IndexRoute from './routes/index.route';
import MessageRoute from './routes/message.route';
import UsersRoute from './routes/users.route';
import validateEnv from './utils/validateEnv';
validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new ContactRoute(), new MessageRoute()]);

app.listen();
