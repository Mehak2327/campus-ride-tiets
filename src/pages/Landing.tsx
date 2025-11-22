import React from "react";
import ThaparNavbar from "@/components/ThaparNavbar";
import HeroThapar from "@/components/HeroThapar";
import Footer from "@/components/Footer";

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-[#AA0000]/10 flex items-center justify-center text-[#AA0000] font-bold text-xl">
          R
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-lg">{title}</div>
          <div className="text-sm text-gray-600 mt-1 leading-relaxed">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E5DADA]">
      <ThaparNavbar />
      <HeroThapar />

      {/* No extra footer here — removed white footer */}

      <Footer />
    </div>
  );
}
