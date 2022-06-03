import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Topbar } from "../Topbar";

function TasksLayout() {
   return (
      <Container>
         <Topbar />
         <Outlet />
      </Container>
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

export { TasksLayout };
