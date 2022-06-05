import {
   RiMenuLine as ListIcon,
   RiFunctionLine as GridIcon,
   RiSettings4Line as SettingsIcon,
} from "react-icons/ri";
import logo from "../../images/logo.svg";
import { SidebarItem } from "./SidebarItem";
import { Container, Logo, TabList } from "./styles";

function Sidebar() {
   return (
      <Container>
         <Logo src={logo} />
         <TabList>
            <SidebarItem to="/dashboard" icon={GridIcon} label="DASHBOARD" />
            <SidebarItem to="/my-tasks" icon={ListIcon} label="MY TASKS" />
            <SidebarItem to="/settings" icon={SettingsIcon} label="SETTINGS" />
         </TabList>
      </Container>
   );
}

export { Sidebar };
