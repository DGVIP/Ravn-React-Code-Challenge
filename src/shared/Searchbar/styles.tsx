import styled from "styled-components";

export const Container = styled.div`
   padding: 12px 24px;
   border-radius: 16px;
   color: var(--color-neutral-2);
   background-color: var(--color-neutral-4);
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 24px;
`;

export const Input = styled.input`
   width: 100%;
   border: none;
   color: var(--color-neutral-1);
   background-color: transparent;

   &:focus {
      outline: none;
   }
`;

export const IconButton = styled.button`
   width: 24px;
   border: none;
   cursor: pointer;
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: center;
   color: var(--color-neutral-2);
`;
