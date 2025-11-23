import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LogOut, MapPin, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/store/useAppStore';
import MapPanel from '@/components/MapPanel';
import { toast } from 'sonner';

export default function DriverDashboard() {
  const navigate = useNavigate();
  const currentUser = useAppStore((s) => s.currentUser);

  useEffect(() => {
    if (!currentUser) navigate('/driver');
  }, [currentUser]);

  const drivers = useAppStore((s) => s.drivers);
  const pools = useAppStore((s) => s.pools);
  const students = useAppStore((s) => s.students);
  const hotspots = useAppStore((s) => s.hotspots);

  const verifyOtp = useAppStore((s) => s.verifyOtp);
  const startTrips = useAppStore((s) => s.startTrips);
  const completeTrips = useAppStore((s) => s.completeTrips);
  const setCurrentUser = useAppStore((s) => s.setCurrentUser);

  const [otpInput, setOtpInput] = useState('');

  const currentDriver = drivers.find((d) => d.id === currentUser?.id);
  const assignedPool = currentDriver?.assignedPoolId
    ? pools.find((p) => p.id === currentDriver.assignedPoolId)
    : null;

  const poolMembers = assignedPool
    ? students.filter((s) => assignedPool.studentIds.includes(s.id))
    : [];

  const handleLogout = () => {
    setCurrentUser(null);
    toast.success('Logged out');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F2EDEE] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold neon-text">Driver Dashboard</h1>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>

        {/* Your route, OTP, passengers UI */}
        <MapPanel height="500px" />
      </div>
    </div>
  );
}
