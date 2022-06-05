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

export const FormContainer = styled(motion.form)`
   width: 572px;
   padding: 16px;
   border-radius: 8px;
   background-color: var(--color-neutral-3);
   display: flex;
   flex-direction: column;
   gap: 24px;
`;

export const TitleInput = styled.input`
   border: none;
   font-family: inherit;
   color: var(--color-neutral-1);
   background-color: transparent;

   &:focus {
      outline: none;
   }

   &::placeholder {
      color: var(--color-neutral-2);
   }
`;

export const TagsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 16px;
`;

export const TagButtonContainer = styled.div`
   position: relative;
`;

export const TagButton = styled.button.attrs({
   type: "button",
})`
   width: 100%;
   border: none;
   cursor: pointer;
   border-radius: 4px;
   padding: 4px 8px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 10px;
   color: var(--color-neutral-1);
   background-color: #94979a19;
   white-space: nowrap;
   max-width: 130px;
`;
export const Button = css`
   cursor: pointer;
   border: none;
   color: var(--color-neutral-1);
   padding: 8px;
   border-radius: 8px;
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
`;

interface CreateButtonProps {
   backgroundColor: string;
}

export const CreateButton = styled.button<CreateButtonProps>`
   ${Button}
   background-color: ${(props) => props.backgroundColor};
`;

interface DropdownProps {
   isOpen: boolean;
}

export const Dropdown = styled.div<DropdownProps>`
   padding: 16px;
   position: absolute;
   border-radius: 8px;
   top: calc(100% + 8px);
   left: 50%;
   transform: translateX(-50%);
   border: 1px solid var(--color-neutral-2);
   background-color: var(--color-neutral-3);
   display: ${(props) => (props.isOpen ? "block" : "none")};
`;

interface MenuProps {
   isOpen: boolean;
}
export const Menu = styled.div<MenuProps>`
   padding: 8px 0;
   display: flex;
   flex-direction: column;
   position: absolute;
   left: 50%;
   border-radius: 8px;
   top: calc(100% + 8px);
   transform: translateX(-50%);
   background-color: var(--color-neutral-3);
   border: 1px solid var(--color-neutral-2);
   display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const MenuTitle = styled.span`
   padding: 4px 16px;
   color: var(--color-neutral-2);
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
   width: 18px;
   height: 18px;
   border-radius: 0;
   cursor: pointer;
   border: 3px solid var(--color-neutral-1);
`;

export const MenuOption = styled.button.attrs({ type: "button" })`
   width: 100%;
   gap: 10px;
   padding: 8px 16px;
   display: flex;
   flex-direction: row;
   align-items: center;
   white-space: nowrap;
   color: var(--color-neutral-1);

   &:hover {
      background-color: rgba(255, 255, 255, 0.25);
   }
`;
