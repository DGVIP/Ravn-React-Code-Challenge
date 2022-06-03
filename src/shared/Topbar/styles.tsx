import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
   padding-top: 4px;
   padding-bottom: 4px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const SwitchContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;

export const Button = css`
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   padding: 8px;
   border-radius: 8px;
   border-width: 1px;
   border-style: solid;
   color: var(--color-neutral-1);
`;

export const SwitchButton = styled(NavLink)`
   ${Button}
   position: relative;
   border-color: transparent;

   &.active {
      color: var(--color-primary-4);
   }
`;

export const IconButton = styled.button`
   ${Button}
   border-color: var(--color-primary-4);
   background-color: var(--color-primary-4);
`;

export const Indicator = styled(motion.div)`
   inset: -1px;
   position: absolute;
   border-radius: 8px;
   border: 1px solid var(--color-primary-4);
`;
