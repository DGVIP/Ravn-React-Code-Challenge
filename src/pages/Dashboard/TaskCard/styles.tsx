import styled from "styled-components";

export const Container = styled.article`
   padding: 16px;
   border-radius: 8px;
   background-color: var(--color-neutral-4);
   display: flex;
   gap: 16px;
   flex-direction: column;
`;

export const Header = styled.header`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   gap: 16px;
`;

export const Footer = styled.footer`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const AvatarContainer = styled.figure`
   width: 40px;
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Avatar = styled.img`
   width: 32px;
   height: 32px;
   border-radius: 50%;
   object-fit: cover;
`;

export const IconButton = styled.button`
   padding-top: 4px;
   padding-bottom: 4px;
   border: none;
   cursor: pointer;
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: center;
   color: var(--color-neutral-2);
`;

export const Title = styled.h3`
   font-size: 18px;
   color: var(--color-neutral-1);
`;

export const TimerContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const ReactionsContainer = styled.div`
   display: flex;
   gap: 16px;
   align-items: center;
`;

export const ReactionButton = styled.button`
   border: none;
   cursor: pointer;
   color: var(--color-neutral-1);
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 4px;
`;
export const ReactionLabel = styled.span`
   font-size: 15px;
`;

export const TagsContainer = styled.div`
   display: flex;
   gap: 8px;
   flex-direction: row;
   flex-wrap: wrap;
`;

interface TagProps {
   color: string;
   backgroundColor: string;
}

export const Tag = styled.span<TagProps>`
   padding: 4px 16px;
   border-radius: 4px;
   color: ${(props) => props.color};
   background-color: ${(props) => props.backgroundColor};

   display: flex;
   gap: 8px;
   flex-direction: row;
   align-items: center;
`;
