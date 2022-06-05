import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import { GetTasksDocument, GetTasksQuery, useDeleteTaskMutation } from "../../../graphql";
import { Text } from "../../../shared/common/Text";
import { ActionsContainer, Backdrop, CancelButton, Container, DeleteButton } from "./styles";

interface Props {
   taskId: string;
   handleCloseModal: () => void;
}

function ConfirmModal(props: Props) {
   const container = document.getElementById("modal") as HTMLDivElement;
   return createPortal(<Modal {...props} />, container);
}

function Modal(props: Props) {
   const { taskId, handleCloseModal } = props;
   const [deleteTask] = useDeleteTaskMutation({
      update: (cache, result) => {
         const data = cache.readQuery<GetTasksQuery>({ query: GetTasksDocument });
         const tasks = data?.tasks;
         const deletedTaskId = result.data?.deleteTask.id;
         if (tasks && deletedTaskId) {
            cache.writeQuery<GetTasksQuery>({
               query: GetTasksDocument,
               data: { tasks: tasks.filter((task) => task.id !== deletedTaskId) },
            });
         }
      },
   });

   const handleDeleteTask = async () => {
      try {
         await deleteTask({
            variables: {
               input: {
                  id: taskId,
               },
            },
            optimisticResponse: {
               __typename: "Mutation",
               deleteTask: {
                  __typename: "Task",
                  id: taskId,
               },
            },
         });
         toast.success("Task deleted successfully");
         handleCloseModal();
      } catch {
         toast.error("Error deleting task");
      }
   };

   return (
      <Backdrop
         onClick={handleCloseModal}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
      >
         <Container
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
         >
            <Text size="xl" weight="bold" variant="body">
               Are you sure?
            </Text>
            <Text size="md" weight="regular" variant="body">
               This action can not be undone.
            </Text>
            <ActionsContainer>
               <CancelButton className="font-md-regular" onClick={handleCloseModal}>
                  <Text size="md" variant="body" weight="regular">
                     Cancel
                  </Text>
               </CancelButton>
               <DeleteButton className="font-md-regular" onClick={handleDeleteTask}>
                  <Text size="md" variant="body" weight="regular">
                     Delete
                  </Text>
               </DeleteButton>
            </ActionsContainer>
         </Container>
      </Backdrop>
   );
}

export { ConfirmModal };
