import React from 'react';

const ListingCard = ({ title, description, location, price, category }) => {
  return (
    <div className="bg-white hover:cursor-pointer shadow-lg rounded-xl p-4 m-2 border border-gray-300 w-[300px] hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold text-blue-700">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <div className="mt-2 text-sm">
        <span className="text-gray-800 font-medium">📍 {location}</span>
      </div>
      <div className="mt-2 text-sm">
        <span className="text-green-700 font-semibold">₹{price}</span> /session
      </div>
      <div className="mt-2 text-xs text-gray-500 italic">Category: {category}</div>
    </div>
  );
};

export default ListingCard;
