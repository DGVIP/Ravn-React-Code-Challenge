import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Container = styled(NavLink)`
   position: relative;
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 20px;
   padding: 16px 20px;
   text-decoration: none;
   color: var(--color-neutral-2);
   background-color: transparent;
   transition: 0.3s;

   &:hover {
      color: var(--color-primary-4);
   }

   &.active {
      color: var(--color-primary-4);
   }
`;

export const Indicator = styled(motion.div)`
   inset: 0;
   position: absolute;
   border-right: 4px solid var(--color-primary-4);
   background-image: linear-gradient(to right, #ba252500 0%, #d24d4d19 100%);
`;
