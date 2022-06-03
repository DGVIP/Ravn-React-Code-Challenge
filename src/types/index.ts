export const enum PointEstimate {
   Zero = "ZERO",
   One = "ONE",
   Two = "TWO",
   Four = "FOUR",
   Eight = "EIGHT",
}

export const enum TaskTag {
   Android = "ANDROID",
   Ios = "IOS",
   NodeJs = "NODE_JS",
   Rails = "RAILS",
   React = "REACT",
}

export const enum Status {
   Backlog = "BACKLOG",
   Cancelled = "CANCELLED",
   Done = "DONE",
   InProgress = "IN_PROGRESS",
   ToDo = "TODO",
}

export enum UserType {
   Admin = "ADMIN",
   Candidate = "CANDIDATE",
}

export interface User {
   id: string;
   type: UserType;
   email: string;
   avatar?: string;
   fullName: string;
   createdAt: string;
   updatedAt: string;
}

export interface Task {
   id: string;
   name: string;
   status: Status;
   position: number;
   tags: TaskTag[];
   creator: User;
   assignee: User;
   dueDate: string;
   createdAt: string;
   pointEstimate: PointEstimate;
}
