import React from 'react';

const pgData = [
  {
    name: "Hariom PG 1",
    location: "Location 1",
    description: "A peaceful and well-equipped PG near central market.",
    imageUrl: "https://images.pexels.com/photos/4448826/pexels-photo-4448826.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Replace with actual image URL
  },
  {
    name: "Hariom PG 2",
    location: "Location 2",
    description: "Cozy rooms with all amenities and great connectivity.",
    imageUrl: "https://images.pexels.com/photos/12541479/pexels-photo-12541479.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Replace with actual image URL
  },
  {
    name: "Hariom PG 3",
    location: "Location 3",
    description: "Perfect for students, located near university.",
    imageUrl: "https://images.pexels.com/photos/4619885/pexels-photo-4619885.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Replace with actual image URL
  },
  {
    name: "Hariom PG 4",
    location: "Location 4",
    description: "A spacious PG with top-notch services.",
    imageUrl: "https://images.pexels.com/photos/5147364/pexels-photo-5147364.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
  },
  {
    name: "Hariom PG 5",
    location: "Location 5",
    description: "Comfortable and affordable PG in a prime location.",
    imageUrl: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
  },
];

const PGCard = ({ name, location, description, imageUrl }) => {
    console.log(imageUrl);
  return (
    <div className="max-w-sm bg-white-500 rounded-lg shadow-lg overflow-hidden m-4">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const PGList = () => {
  return (
    <div className="bg-white-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Our PGs</h1>
      <div className="flex flex-wrap justify-center">
        {pgData.map((pg, index) => (
          <PGCard
            key={index}
            name={pg.name}
            location={pg.location}
            description={pg.description}
            imageUrl={pg.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PGList;
