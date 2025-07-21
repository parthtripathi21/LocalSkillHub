import React, { useEffect, useState } from 'react';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetch('http://localhost:5000/api/listings')
      .then(res => res.json())
      .then(data => {
        setListings(data);
        setFilteredListings(data);
      })
      .catch(err => console.error('Error fetching listings:', err));
  }, []);

  useEffect(() => {
    let filtered = listings;

    if (activeCategory !== 'All') {
      filtered = filtered.filter(listing =>
        listing.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(listing =>
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredListings(filtered);
  }, [searchTerm, activeCategory, listings]);

  const categories = ['All', 'Home', 'Education', 'Music', 'Finance', 'Programming'];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📂 Browse Skill Listings</h2>

      <input
        type="text"
        placeholder="Search by title, location or category..."
        className="input mb-4 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-3 py-1 rounded-full border ${
              activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <div key={listing.id} className="p-4 bg-white rounded-xl shadow border border-gray-200">
              <h3 className="text-lg font-semibold mb-1">{listing.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{listing.description}</p>
              <div className="text-sm text-gray-500">📍 {listing.location}</div>
              <div className="text-sm text-blue-600 mt-1">Category: {listing.category}</div>
              <div className="text-sm text-green-600 mt-1">₹ {listing.price}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-600 text-md">No listings found.</div>
        )}
      </div>
    </div>
  );
};

export default Listings;
