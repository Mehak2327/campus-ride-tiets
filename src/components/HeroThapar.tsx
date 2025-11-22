import React from "react";
import { Link } from "react-router-dom";

export default function HeroThapar() {
  return (
    <section className="relative w-full h-[88vh] overflow-hidden bg-[#E5DADA]">
      {/* Clear Background Image (NO overlay now) */}
      <img
        src="/thapar.jpg"
        alt="Thapar Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-12">
        <div className="max-w-3xl text-left">
          <h1 className="text-5xl font-extrabold text-[#1A1A1A] leading-tight drop-shadow-lg">
            Thapar Campus Mobility Service
          </h1>

          <p className="mt-6 text-lg text-gray-900 font-medium leading-relaxed drop-shadow">
            A secure, efficient and eco-friendly transportation service inside
            Thapar University. Real-time tracking, student verification & intelligent pooling.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <Link
              to="/admin"
              className="px-10 py-3 rounded-full bg-[#AA0000] text-white font-semibold shadow-lg hover:bg-[#8c0000] transition"
            >
              Demo
            </Link>

            <Link
              to="/auth/student"
              className="px-10 py-3 rounded-full border border-gray-400 text-gray-800 font-semibold bg-white/40 backdrop-blur-sm hover:bg-white transition"
            >
              Student Login
            </Link>

            <Link
              to="/auth/driver"
              className="px-10 py-3 rounded-full border border-gray-400 text-gray-800 font-semibold bg-white/40 backdrop-blur-sm hover:bg-white transition"
            >
              Driver Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
