import * as express from "express";
import { Router, Request, Response, NextFunction } from "express";
import Tracker from "./api/tracker";

class App {
  public app: express.Application;
  private router: Router = Router();
  private trackerAPI: Tracker = new Tracker();

  constructor() {
    this.app = express();
    this.middlewares();
    this.Routes();
    this.app.use(this.router);
  }

  private middlewares = () => {
    this.app.use(express.json());
  };

  private Routes() {
    this.router.get("/", this.trackerAPI.getCurrentProgress);
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`back-end started on port : ${process.env.PORT}`);
    });
    process.on("unhandledRejection", (error) => {
      console.log("unhandledRejection", error);
    });
  }
}

export default App;
