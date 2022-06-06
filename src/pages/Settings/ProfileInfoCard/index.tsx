import { Container, FieldContainer, InfoContainer } from "./styles";
import { Text } from "../../../shared/common/Text";
import { Avatar } from "../../../shared/common/Avatar";
import { useAuth } from "../../../contexts/auth/AuthContext";
import { formatDate } from "../../../utils/date";

function ProfileInfoCard() {
   const { user } = useAuth();

   const userInfo = [
      { label: "Name", value: user?.fullName },
      { label: "Email", value: user?.email },
      { label: "User Type", value: user?.type },
      { label: "Created at", value: formatDate(user?.createdAt) },
      { label: "Updated at ", value: formatDate(user?.updatedAt) },
   ];

   return (
      <Container>
         <Text as="h2" size="xl" variant="body" weight="bold">
            Profile
         </Text>
         <InfoContainer>
            <Avatar src={user?.avatar} size={120} />
            <FieldContainer>
               {userInfo.map((info) => (
                  <Text key={info.label} as="dt" size="lg" variant="body" weight="bold">
                     {info.label}
                  </Text>
               ))}
               {userInfo.map((info, index) => (
                  <Text key={index} as="dd" size="md" variant="body" weight="regular">
                     {info.value}
                  </Text>
               ))}
            </FieldContainer>
         </InfoContainer>
      </Container>
   );
}

export { ProfileInfoCard };
