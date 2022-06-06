import { formatTasks } from "../../utils/tasks";
import { useGetTasksQuery } from "../../graphql";
import { TasksLoading } from "../../shared/TasksLayout/TasksLoading";
import { TasksError } from "../../shared/TasksLayout/TasksError";
import { TasksEmpty } from "../../shared/TasksLayout/TasksEmpty/TasksEmpty";
import { Container, Header, Heading } from "./styles";
import { Text } from "../../shared/common/Text";
import { TaskTable } from "./TaskTable";

const headings = ["# Task Name", "Task Tags", "Estimate", "Task Assign Name", "Due Date"];

function MyTasks() {
   const {
      loading,
      error,
      refetch,
      data: getTasksData,
   } = useGetTasksQuery({
      notifyOnNetworkStatusChange: true,
   });

   if (loading) {
      return <TasksLoading />;
   }

   if (error) {
      return (
         <TasksError
            handleRetry={() => {
               refetch();
            }}
         />
      );
   }

   if (!getTasksData) {
      return null;
   }

   if (!getTasksData.tasks.length) {
      return <TasksEmpty />;
   }

   const taskData = formatTasks(getTasksData.tasks);

   return (
      <Container>
         <Header>
            {headings.map((heading) => (
               <Heading key={heading}>
                  <Text variant="body" size="md" weight="regular">
                     {heading}
                  </Text>
               </Heading>
            ))}
         </Header>
         {(Object.keys(taskData) as Array<keyof typeof taskData>).map((status) => (
            <TaskTable key={status} status={status} taskList={taskData[status]} />
         ))}
      </Container>
   );
}

export { MyTasks };
