import styled from "styled-components";
import { GridLayout } from "../styles";

export const Table = styled.div`
   width: 100%;
   overflow: hidden;
   border-top-left-radius: 4px;
   border-top-right-radius: 4px;
   background-color: ${(props) => props.theme.palette.neutral[4]};
`;

export const Head = styled.div`
   gap: 16px;
   display: flex;
   padding: 12px 16px;
   flex-direction: row;
   align-items: center;
   grid-column: span 5;
   border-top-left-radius: 4px;
   border-top-right-radius: 4px;
   border: 1px solid ${(props) => props.theme.palette.neutral[3]};
`;

export const Row = styled.div`
   ${GridLayout}
   width: 100%;
   border-left: 1px solid ${(props) => props.theme.palette.neutral[3]};
`;

export const Cell = styled.div`
   gap: 8px;
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 16px;
   white-space: nowrap;
   border-right: 1px solid ${(props) => props.theme.palette.neutral[3]};
   border-bottom: 1px solid ${(props) => props.theme.palette.neutral[3]};

   & > span {
      overflow: hidden;
      text-overflow: ellipsis;
   }
`;

interface BodyProps {
   isExpanded: boolean;
}

export const Body = styled.div<BodyProps>`
   max-height: ${(props) => (props.isExpanded ? "auto" : "0")};
`;
