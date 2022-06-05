import styled from "styled-components";
import { ProfileInfoCard } from "./ProfileInfoCard";

function Settings() {
   return (
      <Container>
         <ProfileInfoCard />
      </Container>
   );
}

const Container = styled.div`
   width: 100%;
   height: 100%;
`;

export { Settings };
