import {
   RiMoreFill as OptionsIcon,
   RiAttachment2 as AttachmentIcon,
   RiNodeTree as BranchIcon,
   RiChat3Line as CommentIcon,
   RiAlarmLine as TimerIcon,
} from "react-icons/ri";
import OptionsMenu from "./OptionsMenu";
import { useRef, useState } from "react";
import { ArrayElement } from "../../../types";
import { ConfirmModal } from "../ConfirmModal";
import { GetTasksQuery } from "../../../graphql";
import fakeAvatar from "../../../images/avatar.jpg";
import { formatPointEstimate } from "../../../utils/pointEstimate";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { getTagBackgroundColor, getTagFontColor } from "../../../utils/tag";
import { formatDueDate, getDueDateBackgroundColor, getDueDateFontColor } from "../../../utils/date";
import {
   Avatar,
   AvatarContainer,
   Container,
   Content,
   Footer,
   Header,
   IconButton,
   ReactionButton,
   ReactionLabel,
   ReactionsContainer,
   Tag,
   TagsContainer,
   TimerContainer,
} from "./styles";
import { AnimatePresence } from "framer-motion";

type Task = ArrayElement<GetTasksQuery["tasks"]>;

interface Props {
   task: Task;
}
function TaskCard(props: Props) {
   const { task } = props;

   const optionsMenuRef = useRef<HTMLDivElement>(null);
   const [isOpenOptionsMenu, setIsOpenOptionsMenu] = useState(false);
   const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

   const toggleOptionsMenu = () => {
      setIsOpenOptionsMenu((prev) => !prev);
   };

   useOnClickOutside(optionsMenuRef, () => {
      setIsOpenOptionsMenu(false);
   });

   return (
      <Container>
         <Header>
            <span className="font-lg-bold">{task.name}</span>
            <div ref={optionsMenuRef}>
               <IconButton onClick={toggleOptionsMenu}>
                  <OptionsIcon size={24} />
               </IconButton>
               {isOpenOptionsMenu && (
                  <OptionsMenu
                     task={task}
                     openConfirmModal={() => setIsOpenConfirmModal(true)}
                     closeOptionsMenu={() => {
                        setIsOpenOptionsMenu(false);
                     }}
                  />
               )}
            </div>
         </Header>

         <Content className="font-md-bold">
            <TimerContainer>
               <span>{formatPointEstimate(task.pointEstimate)}</span>
               <Tag
                  color={getDueDateFontColor(task.dueDate)}
                  backgroundColor={getDueDateBackgroundColor(task.dueDate)}
               >
                  <TimerIcon size={24} />
                  <span>{formatDueDate(task.dueDate)}</span>
               </Tag>
            </TimerContainer>
            <TagsContainer>
               {task.tags.map((tag, index) => (
                  <Tag
                     key={index}
                     color={getTagFontColor(tag)}
                     backgroundColor={getTagBackgroundColor(tag)}
                  >
                     {tag}
                  </Tag>
               ))}
            </TagsContainer>
         </Content>

         <Footer>
            <AvatarContainer>
               <Avatar src={task.assignee?.avatar || fakeAvatar} />
            </AvatarContainer>

            <ReactionsContainer className="font-md-regular">
               <ReactionButton>
                  <AttachmentIcon />
               </ReactionButton>
               <ReactionButton>
                  <ReactionLabel>3</ReactionLabel>
                  <BranchIcon />
               </ReactionButton>
               <ReactionButton>
                  <ReactionLabel>5</ReactionLabel>
                  <CommentIcon />
               </ReactionButton>
            </ReactionsContainer>
         </Footer>

         <AnimatePresence>
            {isOpenConfirmModal && (
               <ConfirmModal
                  taskId={task.id}
                  handleCloseModal={() => {
                     setIsOpenConfirmModal(false);
                  }}
               />
            )}
         </AnimatePresence>
      </Container>
   );
}

export { TaskCard };
