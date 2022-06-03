import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Container = styled.aside`
   width: 232px;
   border-radius: 24px;
   padding-top: 16px;
   padding-bottom: 16px;
   background-color: var(--color-neutral-4);
   display: flex;
   flex-direction: column;
   gap: 48px;
   flex-shrink: 0;
`;

export const Logo = styled.img`
   width: 40px;
   height: 36px;
   margin-left: auto;
   margin-right: auto;
`;

export const TabList = styled.div`
   display: flex;
   flex-direction: column;
`;

export const Tab = styled(NavLink)`
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
