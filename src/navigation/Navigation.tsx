import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../shared/Layout";
import { TasksLayout } from "../shared/TasksLayout";
import { NotFound } from "../pages/NotFound";
import { Dashboard } from "../pages/Dashboard";
import { MyTasks } from "../pages/MyTasks";
import { Settings } from "../pages/Settings";

function Navigation() {
   return (
      <Router>
         <Routes>
            <Route element={<Layout />}>
               <Route element={<TasksLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/my-tasks" element={<MyTasks />} />
               </Route>
               <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
         </Routes>
      </Router>
   );
}

export { Navigation };
