import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroThapar() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[92vh] overflow-hidden">

      {/* Background Image */}
      <img
        src="/thapar.jpg"
        alt="Thapar University"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* White Transparent Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl px-6 pt-32">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Thapar Campus Mobility<br />Service
        </h1>

        <p className="mt-4 text-lg text-gray-800 max-w-2xl">
          A secure, efficient and eco-friendly transportation service inside
          Thapar University. Real-time tracking, student verification & intelligent pooling.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/admin")}
            className="px-8 py-3 rounded-full bg-red-700 text-white text-lg shadow-lg"
          >
            Demo
          </button>

          <button
            onClick={() => navigate("/student")}
            className="px-8 py-3 rounded-full border border-gray-500 text-gray-900 text-lg bg-white/50 backdrop-blur"
          >
            Student Login
          </button>

          <button
            onClick={() => navigate("/driver")}
            className="px-8 py-3 rounded-full border border-gray-500 text-gray-900 text-lg bg-white/50 backdrop-blur"
          >
            Driver Login
          </button>
        </div>
      </div>
    </section>
  );
}
