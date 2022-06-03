import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../shared/Layout";
import { TasksLayout } from "../shared/TasksLayout";
import { NotFound } from "../pages/NotFound";
import { Dashboard } from "../pages/Dashboard";
import { MyTasks } from "../pages/MyTasks";

function Navigation() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route element={<Layout />}>
               <Route element={<TasksLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/my-tasks" element={<MyTasks />} />
               </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
   );
}

export { Navigation };
