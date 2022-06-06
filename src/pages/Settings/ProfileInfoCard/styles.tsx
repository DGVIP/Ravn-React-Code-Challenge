import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   padding: 16px;
   border-radius: 16px;
   background-color: ${(props) => props.theme.palette.neutral[4]};
   display: flex;
   flex-direction: column;
   gap: 16px;
`;

export const InfoContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   gap: 16px;
`;

export const FieldContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
   align-items: center;
   justify-content: center;
`;
