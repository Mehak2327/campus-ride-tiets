import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

import StudentAuth from "./pages/auth/StudentAuth";
import DriverAuth from "./pages/auth/DriverAuth";
import AdminAuth from "./pages/auth/AdminAuth";

import StudentDashboard from "./pages/dashboards/StudentDashboard";
import DriverDashboard from "./pages/dashboards/DriverDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      {/* AUTH */}
      <Route path="/student" element={<StudentAuth />} />
      <Route path="/driver" element={<DriverAuth />} />
      <Route path="/admin" element={<AdminAuth />} />

      {/* DASHBOARDS */}
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/driver/dashboard" element={<DriverDashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
