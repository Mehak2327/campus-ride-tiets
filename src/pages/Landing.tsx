import React from "react";
import ThaparNavbar from "@/components/ThaparNavbar";
import HeroThapar from "@/components/HeroThapar";
import MapPanel from "@/components/MapPanel";
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
    <div className="w-full min-h-screen bg-white flex flex-col">

      {/* NAVBAR */}
      <ThaparNavbar />

      {/* HERO SECTION */}
      <HeroThapar />

      {/* WHY CAMPUS RIDE SECTION */}
      <section className="w-full py-20 bg-white">
        <h2 className="text-center font-bold text-3xl text-gray-900">
          Why Campus Ride?
        </h2>
        <p className="text-center text-gray-600 mt-3 max-w-3xl mx-auto">
          Smart pooling built for Thapar students — save time, reduce congestion,
          and track rides easily.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12 max-w-6xl mx-auto">
          <FeatureCard
            title="Quick Pickup"
            desc="Fast match algorithm for minimal wait times."
          />
          <FeatureCard
            title="Real-time Tracking"
            desc="Live driver location and estimated arrival."
          />
          <FeatureCard
            title="Safe & Verified"
            desc="OTP verification for every ride."
          />
        </div>
      </section>

      {/* MAP PREVIEW SECTION */}
      <section className="w-full py-20 bg-white">
        <h2 className="text-center font-bold text-3xl text-gray-900">
          Live demo map preview
        </h2>
        <div className="mt-10 max-w-6xl mx-auto rounded-2xl overflow-hidden shadow">
          <MapPanel />
        </div>
      </section>

      {/* FOOTER (ONLY ONCE NOW) */}
      <Footer />
    </div>
  );
}
