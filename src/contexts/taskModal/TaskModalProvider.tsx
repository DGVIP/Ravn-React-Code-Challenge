import { ReactNode, useReducer } from "react";
import { TaskItem } from "../../utils/tasks";
import { TaskModalContext } from "./TaskModalContext";

interface Props {
   children: ReactNode;
}

interface State {
   task: TaskItem | null;
   isModalOpen: boolean;
}

type Action =
   | { type: "OPEN_CREATE_MODAL" }
   | { type: "OPEN_UPDATE_MODAL"; payload: TaskItem }
   | { type: "CLOSE_MODAL" };

const initialState = {
   task: null,
   isModalOpen: false,
};

function reducer(state: State, action: Action) {
   switch (action.type) {
      case "OPEN_CREATE_MODAL":
         return {
            ...state,
            isModalOpen: true,
         };
      case "OPEN_UPDATE_MODAL":
         return {
            ...state,
            isModalOpen: true,
            task: action.payload,
         };
      case "CLOSE_MODAL":
         return {
            ...state,
            isModalOpen: false,
            task: null,
         };
      default:
         return state;
   }
}

function TaskModalProvider(props: Props) {
   const { children } = props;

   const [state, dispatch] = useReducer(reducer, initialState);

   const openCreateModal = () => {
      dispatch({ type: "OPEN_CREATE_MODAL" });
   };

   const openUpdateModal = (task: TaskItem) => {
      dispatch({ type: "OPEN_UPDATE_MODAL", payload: task });
   };

   const closeModal = () => {
      dispatch({ type: "CLOSE_MODAL" });
   };

   const value = {
      task: state.task,
      isModalOpen: state.isModalOpen,
      openCreateModal,
      openUpdateModal,
      closeModal,
   };

   return <TaskModalContext.Provider value={value}>{children}</TaskModalContext.Provider>;
}

export { TaskModalProvider };
