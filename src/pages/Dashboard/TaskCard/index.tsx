import {
   RiMoreFill as OptionsIcon,
   RiAttachment2 as AttachmentIcon,
   RiNodeTree as BranchIcon,
   RiChat3Line as CommentIcon,
   RiAlarmLine as TimerIcon,
} from "react-icons/ri";
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
import avatar from "../../../images/avatar.jpg";

function TaskCard() {
   return (
      <Container>
         <Header>
            <span className="font-body-lg-bold">TaskCard</span>
            <IconButton>
               <OptionsIcon size={24} />
            </IconButton>
         </Header>

         <Content className="font-md-bold">
            <TimerContainer>
               <span>0 Points</span>
               <Tag color={"var(--color-neutral-1)"} backgroundColor={"#94979a19"}>
                  <TimerIcon size={24} />
                  <span>TODAY</span>
               </Tag>
            </TimerContainer>
            <TagsContainer>
               {[...Array(2)].map((tag, index) => (
                  <Tag key={index} color={"var(--color-primary-4)"} backgroundColor={"#da584b19"}>
                     Label {index + 1}
                  </Tag>
               ))}
            </TagsContainer>
         </Content>

         <Footer>
            <AvatarContainer>
               <Avatar src={avatar} />
            </AvatarContainer>

            <ReactionsContainer>
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
