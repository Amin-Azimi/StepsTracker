import Stage from "../model/stage.model";
import { Router, Request, Response, NextFunction } from "express";
import { RequestFromServer } from "../shared/functions";

class Tracker {
  public makeProgress(taskId: number) {}

  public async getCurrentProgress(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const query = `query MyQuery {
            stages {
              id
              sort
              title
              tasks {
                completed
                id
                title
                stage_id
              }
            }
          }`;
      const body = JSON.stringify({
        query,
      });
      const data = await RequestFromServer(body);
      if (!data?.data?.stages?.length) {
        throw new Error("There isn't any data to show");
      }
      const stages: Stage[] = <Stage[]>data.data.stages;
      response.status(200).send(stages);
    } catch (err: any) {
      response.status(500).send(err.message);
    }
  }
}

export default Tracker;
