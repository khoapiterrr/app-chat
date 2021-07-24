import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import passport from 'passport';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { connect, set } from 'mongoose';
import { dbConnection } from './database';
import Routes from './interfaces/routes.interface';
import errorMiddleware from './middlewares/error.middleware';
// API keys and Passport configuration
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as passportConfig from './config/passport';
import { logger, stream } from './utils/logger';
import SocketIO from 'socket.io';
import { createServer, Server } from 'http';
import ServerSocket from './sockets';
class App {
  public app: express.Application;
  public port: string | number;
  public env: string;
  private io: SocketIO.Server;
  private server: Server;
  private serverSocket: ServerSocket;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_ENV || 'development';
    //setting socket
    this.server = createServer(this.app);
    // this.server = new Server(this.app);

    this.io = new SocketIO.Server(this.server, {
      cors: {
        origin: true,
      },
    });
    // this.io.listen(this.server);
    this.serverSocket = new ServerSocket(this.io);
    this.connectToDatabase();
    this.initializePassport();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
  }

  public listen() {
    this.server.listen(this.port, () => {
      logger.info(`🚀 App listening on the port ${this.port}`);
    });
    // this.server.listen(this.port, () => {
    //   console.log('serrver listening on port ' + this.port);
    // });
  }

  public getServer() {
    return this.app;
  }

  private connectToDatabase() {
    if (this.env !== 'production') {
      set('debug', true);
    }
    logger.info('🟢 The database is connecting with link url:', dbConnection.url);
    connect(dbConnection.url, dbConnection.options)
      .then(() => {
        logger.info('🟢 The database is connected.');
      })
      .catch((error: Error) => {
        logger.error(`🔴 Unable to connect to the database: ${error}.`);
      });
  }

  private initializeMiddlewares() {
    if (this.env === 'production') {
      this.app.use(morgan('combined', { stream }));
      this.app.use(cors({ origin: true, credentials: true }));
    } else if (this.env === 'development') {
      this.app.use(morgan('dev', { stream }));
      this.app.use(cors({ origin: true, credentials: true }));
    }

    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use(`/apiv1${route.path}`, route.router);
    });

    this.serverSocket.initializeSocket();
  }

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'Example docs',
        },
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
  private initializePassport() {
    // initialize passport
    this.app.use(passport.initialize());
    // deserialize cookie from the browser
    this.app.use(passport.session());
  }
}

export default App;
