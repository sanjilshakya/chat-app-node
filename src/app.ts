import express, { Express } from 'express';

import { SetupServer } from './setupServer';
import databaseConnection from './setupDatabase';
import { config } from './config';

class App {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: SetupServer = new SetupServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const app: App = new App();
app.initialize();
