import React from "react";
import thaparImage from "/thapar.jpg";

export default function HeroThapar() {
  return (
    <section
      className="relative w-full h-[92vh] flex items-center"
      style={{
        backgroundImage: `url(${thaparImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✨ White transparent overlay restored */}
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 sm:px-12 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold text-[#111827]">
          Thapar Campus Mobility <br /> Service
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700">
          A secure, efficient and eco-friendly transportation service inside
          Thapar University. Real-time tracking, student verification & intelligent pooling.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/admin-auth"
            className="px-6 py-3 bg-[#8A0000] text-white rounded-full text-lg shadow-md hover:bg-[#700000] transition"
          >
            Demo
          </a>

          <a
            href="/student-auth"
            className="px-6 py-3 border border-gray-600 text-gray-800 rounded-full text-lg backdrop-blur-sm bg-white/40"
          >
            Student Login
          </a>

          <a
            href="/driver-auth"
            className="px-6 py-3 border border-gray-600 text-gray-800 rounded-full text-lg backdrop-blur-sm bg-white/40"
          >
            Driver Login
          </a>
        </div>
      </div>
    </section>
  );
}
