import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LogOut, Copy, Check, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";
import MapPanel from "@/components/MapPanel";
import { toast } from "sonner";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const currentUser = useAppStore((s) => s.currentUser);

  // FIXED: correct redirect logic
  useEffect(() => {
    if (!currentUser || currentUser.role !== "student") {
      navigate("/student");
    }
  }, [currentUser]);

  const students = useAppStore((s) => s.students);
  const pools = useAppStore((s) => s.pools);
  const hotspots = useAppStore((s) => s.hotspots);
  const setCurrentUser = useAppStore((s) => s.setCurrentUser);

  const currentStudent = students.find((s) => s.id === currentUser?.id);
  const currentPool = currentStudent?.poolId
    ? pools.find((p) => p.id === currentStudent.poolId)
    : null;

  const poolMembers = currentPool
    ? students.filter((s) => currentPool.studentIds.includes(s.id))
    : [];

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const handleLogout = () => {
    setCurrentUser(null);
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#e8d8d9] p-8 rounded-3xl">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold neon-text">Student Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              {currentStudent
                ? `${currentStudent.name} • ${currentStudent.roll}`
                : "Welcome back"}
            </p>
          </div>

          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>

        {/* REST UI SAME */}
      </div>
    </div>
  );
}
