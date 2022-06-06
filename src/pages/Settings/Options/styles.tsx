import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100%;
   padding: 16px;
   border-radius: 16px;
   background-color: ${(props) => props.theme.palette.neutral[4]};
`;
