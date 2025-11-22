import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import StudentAuth from "./pages/auth/StudentAuth";
import DriverAuth from "./pages/auth/DriverAuth";
import AdminAuth from "./pages/auth/AdminAuth";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/student" element={<StudentAuth />} />
            <Route path="/driver" element={<DriverAuth />} />
            <Route path="/admin" element={<AdminAuth />} />
          </Routes>
        </div>

        {/* Footer ONLY ONCE */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
