import Footer from "@/components/Footer";
import ThaparNavbar from "@/components/ThaparNavbar";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E8DEDF]">
      <ThaparNavbar />

      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          src="/thapar.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Thapar University"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <h1 className="text-5xl font-bold text-[#111827] leading-tight max-w-3xl">
            Thapar Campus Mobility Service
          </h1>

          <p className="mt-6 text-lg text-black/70 max-w-2xl">
            A secure, efficient and eco-friendly transportation service inside
            Thapar University. Real-time tracking, student verification &
            intelligent pooling.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="/auth/StudentAuth"
              className="px-8 py-3 rounded-full bg-[#B30000] text-white font-semibold shadow-md"
            >
              Demo
            </a>

            <a
              href="/auth/StudentAuth"
              className="px-8 py-3 rounded-full border border-black/20 bg-white font-medium text-black"
            >
              Student Login
            </a>

            <a
              href="/auth/DriverAuth"
              className="px-8 py-3 rounded-full border border-black/20 bg-white font-medium text-black"
            >
              Driver Login
            </a>
          </div>
        </div>
      </section>

      {/* WHY CAMPUS RIDE SECTION — RESTORED */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#111827]">Why Campus Ride?</h2>
          <p className="mt-4 text-lg text-black/70 max-w-3xl mx-auto">
            Smart pooling built for Thapar students — save time, reduce congestion,
            and track rides easily.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Quick Pickup */}
            <div className="p-8 rounded-2xl shadow-md bg-white">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl mb-4">
                R
              </div>
              <h3 className="font-semibold text-xl">Quick Pickup</h3>
              <p className="text-black/70 mt-2">
                Fast match algorithm for minimal wait times.
              </p>
            </div>

            {/* Real-time Tracking */}
            <div className="p-8 rounded-2xl shadow-md bg-white">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl mb-4">
                R
              </div>
              <h3 className="font-semibold text-xl">Real-time Tracking</h3>
              <p className="text-black/70 mt-2">
                Live driver location and estimated arrival.
              </p>
            </div>

            {/* Safe & Verified */}
            <div className="p-8 rounded-2xl shadow-md bg-white">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl mb-4">
                R
              </div>
              <h3 className="font-semibold text-xl">Safe & Verified</h3>
              <p className="text-black/70 mt-2">
                OTP verification for every ride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER – FIXED */}
      <Footer />
    </div>
  );
}
