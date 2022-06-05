import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Backdrop = styled(motion.div)`
   inset: 0;
   display: flex;
   position: fixed;
   align-items: center;
   justify-content: center;
   background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled(motion.div)`
   width: 375px;
   padding: 16px;
   border-radius: 8px;
   background-color: var(--color-neutral-3);
   display: flex;
   gap: 16px;
   flex-direction: column;
`;

export const Button = css`
   padding: 8px;
   border-radius: 8px;
   color: var(--color-neutral-1);
`;

export const Title = styled.h3`
   color: var(--color-neutral-1);
`;

export const ActionsContainer = styled.div`
   gap: 24px;
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
`;

export const CancelButton = styled.button`
   ${Button}
   background-color: transparent;

   &:hover {
      background-color: rgba(255, 255, 255, 0.1);
   }
`;

export const DeleteButton = styled.button`
   ${Button}
   background-color: var(--color-primary-4);
`;
