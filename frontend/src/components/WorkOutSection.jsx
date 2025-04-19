import React from "react";

const WorkOutSection = () => {
  return (
    <div className="bg-white p-5">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8">
        Top WorkOut Section
      </h1>

      {/* Responsive flex layout */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        {/* Left Wrapper (Video) */}
        <div className="w-full lg:w-1/2 mt-4">
          <video
            src="/video2.mp4"
            controls
            muted
            autoPlay
            loop
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Wrapper (Content) */}
        <div className="w-full lg:w-1/2 mt-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 text-center border-2 rounded-lg p-4 font-bold">
            Featured BootCamp
          </h1>

          <div className="flex flex-col gap-4 mt-6">
            {/* Timing */}
            <div className="border-2 border-gray-300 p-4 rounded-lg">
              <h1 className="text-xl sm:text-2xl md:text-3xl text-blue-600 font-bold mb-2">
                Timing
              </h1>
              <p className="text-base sm:text-xl">Monday to Saturday</p>
              <p className="text-base sm:text-xl">10:00 AM - 9:00 PM</p>
              <p className="text-xl sm:text-2xl text-red-500 font-bold mt-2">
                Sunday Off
              </p>
            </div>

            {/* Advantages */}
            <div className="border border-gray-300 p-4 rounded-lg">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                Advantage of Our Gym
              </h1>
              {[
                "💧 Free Mineral Water",
                "🏋️‍♂️ Free Personal Training Sessions",
                "📶 Free Wi-Fi Access",
                "🔊 High-Quality Sound System Available",
                "🧼 Clean and Hygienic Environment",
                "📱 Mobile App for Workout Plans",
                "🅿️ Free Parking Available",
              ].map((adv, idx) => (
                <p key={idx} className="text-base sm:text-xl">
                  {adv}
                </p>
              ))}
            </div>

            {/* Nutrition */}
            <div className="border border-gray-300 p-4 rounded-lg">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                Health Nutrition
              </h1>
              <div className="space-y-2 text-gray-700">
                {[
                  "🥗 Apni diet mein har roz sabziyaan aur phal shamil karein.",
                  "💧 Pani zyada piyen — din mein kam az kam 8 glass.",
                  "🍗 Protein lena zaroori hai — chicken, eggs, ya plant-based sources.",
                  "❌ Junk food, oily items, aur sugar se parhez karein.",
                  "🍽️ Breakfast kabhi skip na karein — din ka sabse important meal hota hai.",
                  "🧠 Healthy food se sirf body nahi, mind bhi active rehta hai!",
                  "🥤 Smoothies aur shakes se nutrition badhayein.",
                ].map((tip, idx) => (
                  <p key={idx} className="text-base sm:text-xl">
                    {tip}
                  </p>
                ))}
              </div>
            </div>
            <div className=" sm:text-xl md:text-2xl lg:text-3xl border-2  border-gray-300 p-4 rounded-lg">
            <h1 className=" sm:text-xl md:text-2xl lg:text-3xl text-blue-600 font-bold mb-2 p-5">
              "To enjoy the glow of good health, you must exercise."
              </h1>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOutSection;
