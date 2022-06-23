import Stage from "../model/stage.model";
import { Router, Request, Response, NextFunction } from "express";
import { RequestFromServer } from "../shared/functions";

class Tracker {

  public async makeProgress(
    request: Request,
    response: Response,
    next: NextFunction

  ) {
    const taskId: number = request.body.taskId;
    try {


      const query = `mutation update_task($taskId: Int!) {
      update_tasks(where: {id: {_eq: $taskId}}, _set: {completed: true}) {
        returning {
          id
          completed
          title
        }
      }
    }`;
      const body = JSON.stringify({
        query,
        variables: { taskId }
      });
      const data = await RequestFromServer(body);
      if (data?.returning?.length) {
        throw new Error("task not found");
      }
      response.status(200).send({ data, message: "Ok" });
    }
    catch(err: any) {
      response.status(404).send({ message: "Error", error: err.message });
    }
  }

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
      response.status(200).send({ data: stages, message: "Ok" });
    } catch (err: any) {
      response.status(404).send({ message: "Error", error: err.message });
    }
  }
}

export default Tracker;
