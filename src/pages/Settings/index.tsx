import styled from "styled-components";
import { Options } from "./Options";
import { ProfileInfoCard } from "./ProfileInfoCard";

function Settings() {
   return (
      <Container>
         <ProfileInfoCard />
         <Options />
      </Container>
   );
}

const Container = styled.div`
   gap: 32px;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
`;

export { Settings };
