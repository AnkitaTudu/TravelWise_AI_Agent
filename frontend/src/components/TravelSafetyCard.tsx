export default function TravelSafetyCard() {
  return (
    <div className="bg-[#EDF6EF] rounded-3xl p-6 shadow-sm border border-[#D8E8DB]">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-[#1F2937]">
          Travel Safety
        </h2>

        <span className="text-4xl">🛡️</span>
      </div>

      <div className="mb-5">
        <p className="text-5xl font-bold text-[#2F6F57]">
          92
          <span className="text-xl">/100</span>
        </p>

        <p className="text-gray-500 mt-1">
          Excellent Safety Score
        </p>
      </div>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Solo Travellers</span>
          <span className="font-semibold text-green-700">
            Excellent
          </span>
        </div>

        <div className="flex justify-between">
          <span>Families</span>
          <span className="font-semibold text-green-700">
            Excellent
          </span>
        </div>

        <div className="flex justify-between">
          <span>Women</span>
          <span className="font-semibold text-amber-600">
            Good
          </span>
        </div>

        <div className="flex justify-between">
          <span>Night Travel</span>
          <span className="font-semibold text-orange-600">
            Moderate
          </span>
        </div>

      </div>
    </div>
  );
}