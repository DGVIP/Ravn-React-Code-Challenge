import { RiMenuLine as ListIcon, RiFunctionLine as GridIcon } from "react-icons/ri";
import logo from "../../images/logo.svg";
import { Container, Indicator, Logo, Tab, TabList } from "./styles";

function Sidebar() {
   return (
      <Container>
         <Logo src={logo} alt="App logo" />
         <TabList>
            <Tab to="/dashboard">
               {({ isActive }) => (
                  <>
                     <GridIcon size={24} />
                     <span>DASHBOARD</span>
                     {isActive && <Indicator layoutId="sb-tab-ind" />}
                  </>
               )}
            </Tab>
            <Tab to="/my-tasks">
               {({ isActive }) => (
                  <>
                     <ListIcon size={24} />
                     <span>MY TASKS</span>
                     {isActive && <Indicator layoutId="sb-tab-ind" />}
                  </>
               )}
            </Tab>
         </TabList>
      </Container>
   );
}

export { Sidebar };
