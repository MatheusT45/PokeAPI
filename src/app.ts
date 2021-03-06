import express, { Application } from 'express';
import { Controller } from './controllers/main';
import { MONGO_URL } from './constants/pokeApi';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
  public app: Application;
  public pokeController: Controller;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();

    this.pokeController = new Controller(this.app);
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cors());
  }

  private setMongoConfig() {
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

export default new App().app;