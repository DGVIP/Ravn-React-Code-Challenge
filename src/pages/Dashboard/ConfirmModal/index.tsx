import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import { GetTasksDocument, GetTasksQuery, useDeleteTaskMutation } from "../../../graphql";
import { ActionsContainer, Backdrop, CancelButton, Container, DeleteButton, Title } from "./styles";

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
      update: (cache, query) => {
         const data = cache.readQuery<GetTasksQuery>({ query: GetTasksDocument });
         const tasks = data?.tasks || [];
         cache.writeQuery({
            query: GetTasksDocument,
            data: { tasks: tasks.filter((task) => task.id !== query?.data?.deleteTask?.id) },
         });
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
            <Title className="font-lg-bold">Are you sure?</Title>
            <span className="font-md-regular">This action can not be undone.</span>
            <ActionsContainer>
               <CancelButton className="font-md-regular" onClick={handleCloseModal}>
                  Cancel
               </CancelButton>
               <DeleteButton className="font-md-regular" onClick={handleDeleteTask}>
                  Delete
               </DeleteButton>
            </ActionsContainer>
         </Container>
      </Backdrop>
   );
}

export { ConfirmModal };
