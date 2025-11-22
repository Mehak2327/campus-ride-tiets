import { Link } from "react-router-dom";
import ThaparNavbar from "@/components/ThaparNavbar";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#E8DDDF] flex flex-col">
      {/* Navbar */}
      <ThaparNavbar />

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[85vh] flex items-center"
        style={{
          backgroundImage: "url('/thapar.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Transparent overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        {/* HERO TEXT */}
        <div className="relative z-10 max-w-3xl ml-10 text-left text-white">
          <h1 className="text-5xl font-extrabold leading-tight">
            Thapar Campus Mobility Service
          </h1>

          <p className="text-lg mt-4 max-w-xl">
            A secure, efficient and eco-friendly transportation service inside
            Thapar University. Real-time tracking, student verification & intelligent pooling.
          </p>

          <div className="flex gap-4 mt-8">
            <Link to="/demo">
              <button className="bg-[#a00000] hover:bg-[#7c0000] text-white px-8 py-3 rounded-full font-medium">
                Demo
              </button>
            </Link>

            <Link to="/auth/student">
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium border border-gray-300 hover:bg-gray-100">
                Student Login
              </button>
            </Link>

            <Link to="/auth/driver">
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium border border-gray-300 hover:bg-gray-100">
                Driver Login
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================
          RESTORED — WHY CAMPUS RIDE 
      =============================*/}
      <section className="py-20 bg-[#FAF7F7] text-center">
        <h2 className="text-4xl font-bold mb-4">Why Campus Ride?</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Smart pooling built for Thapar students — save time, reduce congestion,
          and track rides easily.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start border">
            <div className="bg-red-100 text-red-600 rounded-md px-3 py-1 font-bold mb-4">R</div>
            <h3 className="font-semibold text-lg">Quick Pickup</h3>
            <p className="text-gray-600 mt-2">
              Fast match algorithm for minimal wait times.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start border">
            <div className="bg-red-100 text-red-600 rounded-md px-3 py-1 font-bold mb-4">R</div>
            <h3 className="font-semibold text-lg">Real-time Tracking</h3>
            <p className="text-gray-600 mt-2">
              Live driver location and estimated arrival.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start border">
            <div className="bg-red-100 text-red-600 rounded-md px-3 py-1 font-bold mb-4">R</div>
            <h3 className="font-semibold text-lg">Safe & Verified</h3>
            <p className="text-gray-600 mt-2">
              OTP verification for every ride.
            </p>
          </div>
        </div>
      </section>

      {/* ============================
          RESTORED — MAP SECTION 
      =============================*/}
      <section className="pb-20 bg-[#FAF7F7] text-center">
        <h2 className="text-3xl font-bold mt-10 mb-6">Live demo map preview</h2>
        <div className="flex justify-center">
          <img
            src="/map-placeholder.png"
            alt="Map Preview"
            className="max-w-5xl rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
