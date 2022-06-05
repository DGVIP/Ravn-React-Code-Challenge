import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Topbar } from "../Topbar";
import { TaskModal } from "../TaskModal";
import { useTaskModal } from "../../contexts/taskModal/TaskModalContext";
import { TaskModalProvider } from "../../contexts/taskModal/TaskModalProvider";
import { AnimatePresence } from "framer-motion";

function TasksLayout() {
   const { isModalOpen } = useTaskModal();
   return (
      <Container>
         <Topbar />
         <Outlet />
         <AnimatePresence>{isModalOpen && <TaskModal />}</AnimatePresence>
      </Container>
   );
}

function TasksLayoutWrapper() {
   return (
      <TaskModalProvider>
         <TasksLayout />
      </TaskModalProvider>
   );
}

const Container = styled.main`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 20px;
   width: 100%;
   height: 100%;
   overflow: hidden;
`;

export { TasksLayoutWrapper as TasksLayout };
