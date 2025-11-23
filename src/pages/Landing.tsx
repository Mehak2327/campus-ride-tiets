import ThaparNavbar from "@/components/ThaparNavbar";
import HeroThapar from "@/components/HeroThapar";
import MapPanel from "@/components/MapPanel";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="w-full min-h-screen bg-[#f8f6f7] text-[#111827] pt-20">
      {/* NAVBAR */}
      <ThaparNavbar />

      {/* HERO SECTION */}
      <HeroThapar />

      {/* WHY CAMPUS RIDE SECTION */}
      <section className="py-24 bg-[#f8f6f7]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Why Campus Ride?</h2>

          <p className="text-lg text-gray-600 mb-14">
            Smart pooling built for Thapar students — save time, reduce congestion,
            and track rides easily.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="font-semibold text-xl mb-3">Quick Pickup</div>
              <p className="text-gray-600">
                Fast match algorithm for minimal wait times.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="font-semibold text-xl mb-3">Real-time Tracking</div>
              <p className="text-gray-600">
                Live driver location and estimated arrival.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="font-semibold text-xl mb-3">Safe & Verified</div>
              <p className="text-gray-600">
                OTP verification for every ride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE MAP SECTION */}
      <section className="py-24 bg-[#f8f6f7]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Live demo map preview</h2>

          <div
            className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl"
            style={{ height: "500px" }}
          >
            <MapPanel height="500px" showControls={false} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
