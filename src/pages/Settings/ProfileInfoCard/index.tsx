import { Avatar } from "../../../shared/common/Avatar";
import { useAuth } from "../../../contexts/auth/AuthContext";

function ProfileInfoCard() {
   const { user } = useAuth();

   return (
      <div>
         <Avatar src={user?.avatar} size={48} />
      </div>
   );
}

export { ProfileInfoCard };
