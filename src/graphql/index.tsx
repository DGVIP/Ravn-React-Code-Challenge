/* eslint-disable no-use-before-define */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
   ID: string;
   String: string;
   Boolean: boolean;
   Int: number;
   Float: number;
   /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
   DateTime: string;
};

export type CreateTaskInput = {
   assigneeId?: InputMaybe<Scalars["String"]>;
   dueDate: Scalars["DateTime"];
   name: Scalars["String"];
   pointEstimate: PointEstimate;
   status: Status;
   tags: Array<TaskTag>;
};

export type DeleteTaskInput = {
   id: Scalars["String"];
};

export type FilterTaskInput = {
   assigneeId?: InputMaybe<Scalars["String"]>;
   dueDate?: InputMaybe<Scalars["DateTime"]>;
   name?: InputMaybe<Scalars["String"]>;
   ownerId?: InputMaybe<Scalars["String"]>;
   pointEstimate?: InputMaybe<PointEstimate>;
   status?: InputMaybe<Status>;
   tags?: InputMaybe<Array<TaskTag>>;
};

export type Mutation = {
   __typename?: "Mutation";
   createTask: Task;
   deleteTask: Task;
   updateTask: Task;
};

export type MutationCreateTaskArgs = {
   input: CreateTaskInput;
};

export type MutationDeleteTaskArgs = {
   input: DeleteTaskInput;
};

export type MutationUpdateTaskArgs = {
   input: UpdateTaskInput;
};

/** Estimate point for a task */
export enum PointEstimate {
   Eight = "EIGHT",
   Four = "FOUR",
   One = "ONE",
   Two = "TWO",
   Zero = "ZERO",
}

export type Query = {
   __typename?: "Query";
   profile: User;
   tasks: Array<Task>;
   users: Array<User>;
};

export type QueryTasksArgs = {
   input: FilterTaskInput;
};

/** Status for Task */
export enum Status {
   Backlog = "BACKLOG",
   Cancelled = "CANCELLED",
   Done = "DONE",
   InProgress = "IN_PROGRESS",
   Todo = "TODO",
}

export type Task = {
   __typename?: "Task";
   assignee?: Maybe<User>;
   createdAt: Scalars["DateTime"];
   creator: User;
   dueDate: Scalars["DateTime"];
   id: Scalars["ID"];
   name: Scalars["String"];
   pointEstimate: PointEstimate;
   position: Scalars["Float"];
   status: Status;
   tags: Array<TaskTag>;
};

/** Enum for tags for tasks */
export enum TaskTag {
   Android = "ANDROID",
   Ios = "IOS",
   NodeJs = "NODE_JS",
   Rails = "RAILS",
   React = "REACT",
}

export type UpdateTaskInput = {
   assigneeId?: InputMaybe<Scalars["String"]>;
   dueDate?: InputMaybe<Scalars["DateTime"]>;
   id: Scalars["String"];
   name?: InputMaybe<Scalars["String"]>;
   pointEstimate?: InputMaybe<PointEstimate>;
   position?: InputMaybe<Scalars["Float"]>;
   status?: InputMaybe<Status>;
   tags?: InputMaybe<Array<TaskTag>>;
};

export type User = {
   __typename?: "User";
   avatar?: Maybe<Scalars["String"]>;
   createdAt: Scalars["DateTime"];
   email: Scalars["String"];
   fullName: Scalars["String"];
   id: Scalars["ID"];
   type: UserType;
   updatedAt: Scalars["DateTime"];
};

/** Type of the User */
export enum UserType {
   Admin = "ADMIN",
   Candidate = "CANDIDATE",
}

export type GetTasksQueryVariables = Exact<{ [key: string]: never }>;

export type GetTasksQuery = {
   __typename?: "Query";
   tasks: Array<{
      __typename?: "Task";
      id: string;
      name: string;
      status: Status;
      position: number;
      tags: Array<TaskTag>;
      dueDate: string;
      pointEstimate: PointEstimate;
      assignee?: { __typename?: "User"; avatar?: string | null } | null;
   }>;
};

export const GetTasksDocument = gql`
   query GetTasks {
      tasks(input: {}) {
         id
         name
         status
         position
         tags
         assignee {
            avatar
         }
         dueDate
         pointEstimate
      }
   }
`;

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTasksQuery(
   baseOptions?: Apollo.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables>
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
}
export function useGetTasksLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
}
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksQueryResult = Apollo.QueryResult<GetTasksQuery, GetTasksQueryVariables>;
