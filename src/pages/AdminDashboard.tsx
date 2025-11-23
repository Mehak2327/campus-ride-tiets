import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";
import { toast } from "sonner";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const currentUser = useAppStore((s) => s.currentUser);

  useEffect(() => {
    if (!currentUser) navigate("/admin");
  }, [currentUser]);

  const students = useAppStore((s) => s.students);
  const drivers = useAppStore((s) => s.drivers);
  const pools = useAppStore((s) => s.pools);
  const trips = useAppStore((s) => s.trips);

  const demoStep = useAppStore((s) => s.demoStep);
  const seedDemo = useAppStore((s) => s.seedDemo);
  const createPools = useAppStore((s) => s.createPools);
  const assignDrivers = useAppStore((s) => s.assignDrivers);
  const verifyOtp = useAppStore((s) => s.verifyOtp);
  const startTrips = useAppStore((s) => s.startTrips);
  const completeTrips = useAppStore((s) => s.completeTrips);
  const resetDemo = useAppStore((s) => s.resetDemo);
  const updateTripProgress = useAppStore((s) => s.updateTripProgress);

  const setCurrentUser = useAppStore((s) => s.setCurrentUser);

  const handleLogout = () => {
    setCurrentUser(null);
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#e8d8d9] p-8 rounded-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold neon-text">Admin Control</h1>
            <p className="text-muted-foreground mt-1">
              System Overview & Demo Controls
            </p>
          </div>

          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>

        {/* Keep all your UI same here */}
      </div>
    </div>
  );
}
