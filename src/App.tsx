import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import StudentAuth from "./pages/auth/StudentAuth";
import DriverAuth from "./pages/auth/DriverAuth";
import AdminAuth from "./pages/auth/AdminAuth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      {/* AUTH ROUTES */}
      <Route path="/student" element={<StudentAuth />} />
      <Route path="/driver" element={<DriverAuth />} />
      <Route path="/admin" element={<AdminAuth />} />
    </Routes>
  );
}
