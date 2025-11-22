import React from "react";
import HeroThapar from "@/components/HeroThapar";
import ThaparNavbar from "@/components/ThaparNavbar";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E8DEDF]">
      <ThaparNavbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <HeroThapar />
      </main>
    </div>
  );
}
