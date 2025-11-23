import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";

// AUTH PAGES
import StudentAuth from "./pages/auth/StudentAuth";
import DriverAuth from "./pages/auth/DriverAuth";
import AdminAuth from "./pages/auth/AdminAuth";

// DASHBOARDS  (FIXED PATHS)
import StudentDashboard from "./pages/StudentDashboard";
import DriverDashboard from "./pages/DriverDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <Routes>
      {/* LANDING */}
      <Route path="/" element={<Landing />} />

      {/* AUTH ROUTES */}
      <Route path="/student" element={<StudentAuth />} />
      <Route path="/driver" element={<DriverAuth />} />
      <Route path="/admin" element={<AdminAuth />} />

      {/* DASHBOARD ROUTES */}
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/driver/dashboard" element={<DriverDashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
