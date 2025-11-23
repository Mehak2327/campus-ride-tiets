import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  LogOut,
  Play,
  Users,
  Car,
  Clock,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/useAppStore';
import MapPanel from '@/components/MapPanel';
import { toast } from 'sonner';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const currentUser = useAppStore((state) => state.currentUser);
  const students = useAppStore((state) => state.students);
  const drivers = useAppStore((state) => state.drivers);
  const pools = useAppStore((state) => state.pools);
  const trips = useAppStore((state) => state.trips);

  const demoStep = useAppStore((state) => state.demoStep);
  const seedDemo = useAppStore((state) => state.seedDemo);
  const createPools = useAppStore((state) => state.createPools);
  const assignDrivers = useAppStore((state) => state.assignDrivers);
  const verifyOtp = useAppStore((state) => state.verifyOtp);
  const startTrips = useAppStore((state) => state.startTrips);
  const completeTrips = useAppStore((state) => state.completeTrips);
  const resetDemo = useAppStore((state) => state.resetDemo);
  const updateTripProgress = useAppStore((state) => state.updateTripProgress);

  const setCurrentUser = useAppStore((state) => state.setCurrentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/admin');
    }
  }, [currentUser]);

  const handleLogout = () => {
    setCurrentUser(null);
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold neon-text">Admin Control</h1>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>

        {/* Rest of your Admin UI stays exactly same */}
        <MapPanel height="600px" />
      </div>
    </div>
  );
}
