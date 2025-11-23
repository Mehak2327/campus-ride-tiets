import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";
import { toast } from "sonner";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const currentUser = useAppStore((s) => s.currentUser);

  useEffect(() => {
    if (!currentUser) navigate("/student");
  }, [currentUser]);

  const students = useAppStore((s) => s.students);
  const pools = useAppStore((s) => s.pools);
  const hotspots = useAppStore((s) => s.hotspots);
  const setCurrentUser = useAppStore((s) => s.setCurrentUser);

  const student = students.find((s) => s.id === currentUser?.id);
  const pool = student?.poolId
    ? pools.find((p) => p.id === student.poolId)
    : null;

  const members = pool
    ? students.filter((s) => pool.studentIds.includes(s.id))
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

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold neon-text">Student Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              {student ? `${student.name} • ${student.roll}` : "Welcome"}
            </p>
          </div
