import React from 'react';

const facilities = [
  {
    title: "Wi-Fi Connectivity",
    description: "High-speed internet to stay connected at all times.",
    icon: "https://tse3.mm.bing.net/th?id=OIP.DM8EHRJi22Sx0cGuZInQMAHaHZ&pid=Api&P=0&h=180",
  },
  {
    title: "24/7 Security",
    description: "CCTV surveillance and security guards for a safe environment.",
    icon: "https://tse3.mm.bing.net/th?id=OIP.7owQZvT0_adHcXIFyP8w9AHaJI&pid=Api&P=0&h=180",
  },
  {
    title: "Delicious Meals",
    description: "Home-cooked, healthy meals served three times a day.",
    icon: "https://tse1.mm.bing.net/th?id=OIP.7Z0aYL47UTdkjrTtoa_ssQHaHa&pid=Api&P=0&h=180",
  },
  {
    title: "Housekeeping",
    description: "Daily cleaning services to ensure hygiene and comfort.",
    icon: "https://tse1.mm.bing.net/th?id=OIP.ldAMiRijZ-JQ0WLmS526KQHaHa&pid=Api&P=0&h=180",
  },
  {
    title: "Air Conditioned Rooms",
    description: "Fully air-conditioned rooms for a comfortable stay.",
    icon: "https://tse2.mm.bing.net/th?id=OIP.HjSz3dTINHYJZz4R0M9aywHaHa&pid=Api&P=0&h=180",
  },
  {
    title: "Laundry Service",
    description: "Regular laundry service available for all tenants.",
    icon: "https://tse3.mm.bing.net/th?id=OIP.6Q5BsHZRQQZpDMIS3eNkDAHaHa&pid=Api&P=0&h=180",
  },
];

const FacilityCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 m-2 w-full sm:max-w-xs text-center">
      <img className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4" src={icon} alt={title} />
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Facilities = () => {
  return (
    <div className="bg-white-100 min-h-screen p-4 sm:p-8">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
        Facilities We Offer
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {facilities.map((facility, index) => (
          <FacilityCard
            key={index}
            title={facility.title}
            description={facility.description}
            icon={facility.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Facilities;
