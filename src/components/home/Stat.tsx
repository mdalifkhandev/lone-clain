'use client';

const Stat = () => {
  const stats = [
    { value: "10K+", description: "Active Users" },
    { value: "$250M+", description: "Loans Facilitated" },
    { value: "98%", description: "Client Satisfaction" },
    { value: "5", description: "Industry Verticals" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden p-6 md:p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center p-3">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A0E18] mb-1">
              {stat.value}
            </div>
            <div className="text-sm md:text-base text-gray-600 font-medium">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stat;