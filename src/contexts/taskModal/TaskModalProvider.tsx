import { ReactNode, useReducer } from "react";
import { GetTasksQuery } from "../../graphql";
import { ArrayElement } from "../../types";
import { TaskModalContext } from "./TaskModalContext";

type Task = ArrayElement<GetTasksQuery["tasks"]>;

interface Props {
   children: ReactNode;
}

interface State {
   task: Task | null;
   isModalOpen: boolean;
}

type Action =
   | { type: "OPEN_CREATE_MODAL" }
   | { type: "OPEN_UPDATE_MODAL"; payload: Task }
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

   const openUpdateModal = (task: Task) => {
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
