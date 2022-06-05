import styled from "styled-components";

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
