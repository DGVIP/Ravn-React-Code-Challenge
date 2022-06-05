import styled from "styled-components";
import { RiPencilLine as EditIcon, RiDeleteBin6Line as DeleteIcon } from "react-icons/ri";
import { ArrayElement } from "../../../../types";
import { GetTasksQuery } from "../../../../graphql";
import { useTaskModal } from "../../../../contexts/taskModal/TaskModalContext";

type Task = ArrayElement<GetTasksQuery["tasks"]>;

interface Props {
   task: Task;
   closeOptionsMenu: () => void;
   openConfirmModal: () => void;
}
function OptionsMenu(props: Props) {
   const { task, closeOptionsMenu, openConfirmModal } = props;

   const { openUpdateModal } = useTaskModal();

   const handleOpenUpdateModal = () => {
      openUpdateModal(task);
      closeOptionsMenu();
   };

   const handleOpenConfirmModal = () => {
      openConfirmModal();
      closeOptionsMenu();
   };

   return (
      <Container>
         <OptionItem onClick={handleOpenUpdateModal}>
            <EditIcon size={24} />
            <span className="font-md-regular">Edit</span>
         </OptionItem>
         <OptionItem onClick={handleOpenConfirmModal}>
            <DeleteIcon size={24} />
            <span className="font-md-regular">Delete</span>
         </OptionItem>
      </Container>
   );
}

const Container = styled.div`
   right: 0;
   top: 100%;
   padding: 8px 0;
   position: absolute;
   border: 1px solid var(--color-neutral-2);
   display: flex;
   flex-direction: column;
   gap: 8px;
   background-color: var(--color-neutral-3);
   border-radius: 8px;
`;

const OptionItem = styled.button`
   border: none;
   cursor: pointer;
   color: var(--color-neutral-1);
   background-color: transparent;
   gap: 8px;
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 4px 24px;
   width: 122px;

   &:hover {
      background-color: rgba(255, 255, 255, 0.25);
   }
`;

export default OptionsMenu;
