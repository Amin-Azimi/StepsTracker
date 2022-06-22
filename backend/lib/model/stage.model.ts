import Task from "./task.model";

interface Stage{
    id : number;
    title : string;
    sort:number;
    tasks: Task[]
}

export default Stage;