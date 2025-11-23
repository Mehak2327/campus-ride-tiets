import React from "react";
import { NavLink } from "@/components/NavLink";

export default function ThaparNavbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#7B0000] shadow">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/thapar-logo.png"
            alt="Thapar Logo"
            className="h-12 w-auto object-contain"
          />
          <div className="text-white font-semibold text-lg leading-tight">
            Thapar Campus Mobility Service
            <div className="text-[11px] text-white/80">
              Thapar University · TIET Patiala
            </div>
          </div>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex items-center gap-4">
          <NavLink to="/student">Student</NavLink>
          <NavLink to="/driver">Driver</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </div>
      </div>
    </nav>
  );
}
