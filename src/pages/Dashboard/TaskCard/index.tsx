import {
   RiMoreFill as OptionsIcon,
   RiAttachment2 as AttachmentIcon,
   RiNodeTree as BranchIcon,
   RiChat3Line as CommentIcon,
   RiAlarmLine as TimerIcon,
} from "react-icons/ri";
import { GetTasksQuery } from "../../../graphql";
import fakeAvatar from "../../../images/avatar.jpg";
import { formatPointEstimate } from "../../../utils/pointEstimate";
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
import { ArrayElement } from "../../../types";

type Task = ArrayElement<GetTasksQuery["tasks"]>;

interface Props {
   task: Task;
}
function TaskCard(props: Props) {
   const { task } = props;

   return (
      <Container>
         <Header>
            <span className="font-lg-bold">{task.name}</span>
            <IconButton>
               <OptionsIcon size={24} />
            </IconButton>
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
      </Container>
   );
}

export { TaskCard };
