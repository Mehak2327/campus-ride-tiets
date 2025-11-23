import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LogOut, MapPin, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppStore } from "@/store/useAppStore";
import MapPanel from "@/components/MapPanel";
import { toast } from "sonner";

export default function DriverDashboard() {
  const navigate = useNavigate();
  const currentUser = useAppStore((state) => state.currentUser);

  // FIXED: clean redirect logic
  useEffect(() => {
    if (!currentUser || currentUser.role !== "driver") {
      navigate("/driver");
    }
  }, [currentUser]);

  const drivers = useAppStore((state) => state.drivers);
  const pools = useAppStore((state) => state.pools);
  const students = useAppStore((state) => state.students);

  const verifyOtp = useAppStore((state) => state.verifyOtp);
  const startTrips = useAppStore((state) => state.startTrips);
  const completeTrips = useAppStore((state) => state.completeTrips);
  const setCurrentUser = useAppStore((state) => state.setCurrentUser);

  const [otpInput, setOtpInput] = useState("");

  const handleLogout = () => {
    setCurrentUser(null);
    toast.success("Logged out successfully");
    navigate("/");
  };

  const driver = drivers.find((d) => d.id === currentUser?.id);
  const pool = driver?.assignedPoolId
    ? pools.find((p) => p.id === driver.assignedPoolId)
    : null;

  const poolMembers = pool
    ? students.filter((s) => pool.studentIds.includes(s.id))
    : [];

  return (
    <div className="min-h-screen bg-[#e8d8d9] p-8 rounded-3xl">

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold neon-text">Driver Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              {driver ? `${driver.name} • ${driver.plate}` : "Welcome back"}
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
