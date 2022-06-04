import { TaskCard } from "./TaskCard";
import { useGetTasksQuery } from "../../graphql";
import { TasksError } from "../../shared/TasksLayout/TasksError";
import { TasksLoading } from "../../shared/TasksLayout/TasksLoading";
import { TasksEmpty } from "../../shared/TasksLayout/TasksEmpty/TasksEmpty";
import { formatTasks, TaskList as ITaskList } from "../../utils/tasks";
import { Container, TaskColumn, TaskColumnHeader, TaskList } from "./styles";

function Dashboard() {
   const { data, loading, error, refetch } = useGetTasksQuery({
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

   if (!data || !data.tasks.length) {
      return <TasksEmpty />;
   }

   const newData = formatTasks(data.tasks);

   return (
      <Container>
         {Object.keys(newData).map((status) => (
            <TaskColumn key={status}>
               <TaskColumnHeader className="font-lg-bold">
                  {status} ({newData[status as keyof ITaskList].length})
               </TaskColumnHeader>
               <TaskList>
                  {newData[status as keyof ITaskList].map((task) => (
                     <TaskCard key={task.id} task={task} />
                  ))}
               </TaskList>
            </TaskColumn>
         ))}
      </Container>
   );
}

export { Dashboard };
