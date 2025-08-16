import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function profile() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen p-6 max-w-8xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate("/TenantsMainapp")}
        className="flex items-center gap-2 font-Poppins text-gray-700 hover:text-[#02D482] transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Greeting */}
      <div className="mt-4">
        <h1 className="font-bold text-lg">Good afternoon Ingrid</h1>
      </div>

      {/* Balance Card */}
     <div className="relative group mt-6">
  {/* Shadow layer behind */}
  <div className="absolute top-4 left-4 w-full h-full bg-black opacity-0 group-hover:opacity-100 transition pointer-events-none z-0"></div>
  
  {/* Main card */}
  <div className="relative bg-[#00D084] text-white p-5 shadow-md border border-black z-10">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">Landr coin balance</h2>
        <p className="text-2xl font-bold mt-1">1,000</p>
        <p className="text-sm mt-1">
          Number of possible bids :{" "}
          <span className="font-medium underline cursor-pointer">
            21 Bids
          </span>
        </p>
      </div>

      {/* Top-up button */}
      <button className="bg-white text-black rounded-md px-4 py-2 shadow-sm flex items-center gap-2 hover:bg-gray-100 transition">
        <div className="w-6 h-6 bg-yellow-400 rounded-full border border-yellow-500" />
        <span className="text-sm font-medium">Top up coins</span>
      </button>
    </div>
  </div>
</div>

    </div>
  );
}
