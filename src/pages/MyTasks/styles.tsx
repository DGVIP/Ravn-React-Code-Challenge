import styled, { css } from "styled-components";

export const GridLayout = css`
   display: grid;
   grid-template-rows: repeat(auto-fit, 56px);
   grid-template-columns: 1fr 160px 150px 170px 160px;
`;

export const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 16px;
   overflow: hidden;
`;

export const Header = styled.div`
   ${GridLayout}
   min-height: 56px;
   overflow: hidden;
   border-radius: 4px;
   background-color: ${(props) => props.theme.palette.neutral[4]};
   border: 1px solid ${(props) => props.theme.palette.neutral[3]};

   & > *:not(:last-child) {
      border-right: 1px solid ${(props) => props.theme.palette.neutral[3]};
   }
`;

export const Heading = styled.span`
   padding: 16px;
`;

export const Content = styled(Container)`
   overflow-y: auto;
`;
