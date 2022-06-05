import { createContext, useContext } from "react";
import { GetTasksQuery } from "../../graphql";
import { ArrayElement } from "../../types";

type Task = ArrayElement<GetTasksQuery["tasks"]>;

interface TaskModalContextValue {
   task: Task | null;
   isModalOpen: boolean;
   openCreateModal: () => void;
   openUpdateModal: (task: Task) => void;
   closeModal: () => void;
}

const TaskModalContext = createContext<TaskModalContextValue | null>(null);

function useTaskModal() {
   const context = useContext(TaskModalContext);
   if (context === null) {
      throw new Error("useTaskModal must be used within a TaskModalProvider");
   }
   return context;
}

export { useTaskModal, TaskModalContext };
