import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";
import { toast } from "sonner";

export default function DriverDashboard() {
  const navigate = useNavigate();
  const currentUser = useAppStore((s) => s.currentUser);

  useEffect(() => {
    if (!currentUser) navigate("/driver");
  }, [currentUser]);

  const drivers = useAppStore((s) => s.drivers);
  const pools = useAppStore((s) => s.pools);
  const students = useAppStore((s) => s.students);

  const verifyOtp = useAppStore((s) => s.verifyOtp);
  const startTrips = useAppStore((s) => s.startTrips);
  const completeTrips = useAppStore((s) => s.completeTrips);
  const setCurrentUser = useAppStore((s) => s.setCurrentUser);

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

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold neon-text">Driver Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              {driver ? `${driver.name} • ${driver.plate}` : "Welcome"}
            </p>
          </div>

          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>

        {/* Keep your remaining UI here */}
      </div>
    </div>
  );
}
