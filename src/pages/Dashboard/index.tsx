import styled from "styled-components";
import { TaskCard } from "./TaskCard";

function Dashboard() {
   return (
      <Container>
         {[...Array(5)].map((_, i) => (
            <TaskColumn key={i}>
               <TaskColumnHeader>Working (03)</TaskColumnHeader>
               <TaskList>
                  {[...Array(i % 2 ? 5 : 2)].map((_, i) => (
                     <TaskCard key={i + 50} />
                  ))}
               </TaskList>
            </TaskColumn>
         ))}
      </Container>
   );
}

const Container = styled.div`
   flex-grow: 1;
   display: flex;
   flex-direction: row;
   gap: 32px;
   overflow-x: auto;
   overflow-y: hidden;
`;

const TaskColumn = styled.section`
   flex-shrink: 0;
   display: flex;
   flex-direction: column;
   gap: 16px;
   width: 348px;
`;

const TaskColumnHeader = styled.h2`
   color: var(--color-neutral-1);
`;

const TaskList = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 16px;
   overflow-y: auto;
`;

export { Dashboard };
