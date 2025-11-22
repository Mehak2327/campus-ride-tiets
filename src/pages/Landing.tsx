import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import MapPanel from "@/components/MapPanel"
import Footer from "@/components/Footer"

export default function Landing() {
  return (
    <div className="w-full overflow-x-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full">
        <img
          src="thapar.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="relative z-10 max-w-4xl px-8 pt-32">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Thapar Campus Mobility <br /> Service
          </h1>

          <p className="mt-6 text-lg text-gray-800 max-w-2xl">
            A secure, efficient and eco-friendly transportation service inside Thapar University.
            Real-time tracking, student verification & intelligent pooling.
          </p>

          <div className="mt-8 flex gap-6">
            <Button className="bg-red-700 hover:bg-red-800 text-white px-10 py-6 text-lg rounded-full">
              Demo
            </Button>
            <Link to="/student-auth">
              <Button variant="outline" className="px-10 py-6 rounded-full text-lg bg-white/70">
                Student Login
              </Button>
            </Link>
            <Link to="/driver-auth">
              <Button variant="outline" className="px-10 py-6 rounded-full text-lg bg-white/70">
                Driver Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CAMPUS RIDE SECTION */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-semibold text-gray-900">Why Campus Ride?</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Smart pooling built for Thapar students — save time, reduce congestion, and track rides easily.
        </p>

        <div className="mt-16 flex justify-center gap-10 flex-wrap">
          {/* Card 1 */}
          <div className="w-80 p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Quick Pickup</h3>
            <p className="text-gray-600">Fast match algorithm for minimal wait times.</p>
          </div>

          {/* Card 2 */}
          <div className="w-80 p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Real-time Tracking</h3>
            <p className="text-gray-600">Live driver location and estimated arrival.</p>
          </div>

          {/* Card 3 */}
          <div className="w-80 p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Safe & Verified</h3>
            <p className="text-gray-600">OTP verification for every ride.</p>
          </div>
        </div>
      </section>

      {/* MAP PREVIEW SECTION */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Live demo map preview</h2>
        
        <div className="flex justify-center">
          <div className="w-[80%] h-[500px] rounded-xl overflow-hidden shadow-lg">
            <MapPanel />
          </div>
        </div>
      </section>

      {/* ONLY ONE FOOTER */}
      <Footer />
    </div>
  )
}
