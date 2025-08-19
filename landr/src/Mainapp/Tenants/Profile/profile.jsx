import { ArrowLeft, Coins, History, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto p-6 sm:p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/TenantsMainapp")}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-gray-200 text-gray-700 hover:text-[#02D482] hover:ring-[#02D482]/40 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Greeting */}
        <div className="mt-6 flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#02D482]/15 flex items-center justify-center text-[#02D482] font-semibold ring-2 ring-white shadow-sm">
              I
            </div>
            <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#02D482] border-2 border-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Good afternoon, Ingrid</h1>
            <p className="text-sm text-gray-500">Welcome back to your tenant dashboard</p>
          </div>
        </div>

        {/* Balance Card */}
        <div className="relative mt-6">
          <div className="relative group">
              <div className="absolute top-2 left-2 w-full h-full border-2 bg-black opacity-0 group-hover:opacity-20 pointer-events-none"></div>
          <div className="relative overflow-hidden bg-[#00D084] text-white shadow-lg ring-1 ring-black/10">
          
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />

            <div className="relative p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-white/15 p-3 ring-1 ring-white/20">
                    <Coins className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm/6 text-white/80">Landr coin balance</p>
                    <p className="text-3xl font-bold tracking-tight">1,000</p>
                    <p className="text-sm mt-1">
                      Possible bids: <span className="font-medium underline">21</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium shadow-sm transition">
                    <Plus className="w-4 h-4" />
                    Top up
                  </button>
                </div>
              </div>

           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
