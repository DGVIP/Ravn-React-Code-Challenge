import { GetTasksQuery, Status } from "../graphql";

export type TaskList = Record<Status, GetTasksQuery["tasks"]>;

export function formatTasks(tasks: GetTasksQuery["tasks"]): TaskList {
   const newTaskList: TaskList = {
      BACKLOG: [],
      TODO: [],
      IN_PROGRESS: [],
      DONE: [],
      CANCELLED: [],
   };

   tasks.forEach((task) => {
      const status = task.status;
      const newTaskColumn = newTaskList[status];
      newTaskColumn.push(task);
      newTaskList[status] = newTaskColumn;
   });

   return newTaskList;
}
