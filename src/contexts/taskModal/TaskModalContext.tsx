import { createContext, useContext } from "react";
import { TaskItem } from "../../utils/tasks";

interface TaskModalContextValue {
   task: TaskItem | null;
   isModalOpen: boolean;
   openCreateModal: () => void;
   openUpdateModal: (task: TaskItem) => void;
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
