import { TaskCard } from "./TaskCard";
import { formatTasks } from "../../utils/tasks";
import { useGetTasksQuery } from "../../graphql";
import { TasksError } from "../../shared/TasksLayout/TasksError";
import { TasksLoading } from "../../shared/TasksLayout/TasksLoading";
import { TasksEmpty } from "../../shared/TasksLayout/TasksEmpty/TasksEmpty";
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
         {(Object.keys(newData) as Array<keyof typeof newData>).map((status) => (
            <TaskColumn key={status}>
               <TaskColumnHeader className="font-lg-bold">
                  {status} ({newData[status].length})
               </TaskColumnHeader>
               <TaskList>
                  {newData[status].map((task) => (
                     <TaskCard key={task.id} task={task} />
                  ))}
               </TaskList>
            </TaskColumn>
         ))}
      </Container>
   );
}

export { Dashboard };
