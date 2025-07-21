import React, { useEffect, useState } from 'react';
import ListingCard from './ListingCard';
import AddListing from './AddListing';

const Dashboard = ({ user }) => {
  const [listings, setListings] = useState([]);

  const fetchListings = () => {
    fetch('http://localhost:5000/api/listings')
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleNewListing = (listing) => {
    setListings([listing, ...listings]);
  };

  return (
    <div className='w-full h-full p-4'>
      {user ? (
        <AddListing onListingAdded={handleNewListing} />
      ) : (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          🔒 Please <a href="/login" className="underline font-semibold">log in</a> to add a listing.
        </div>
      )}

      <div className='text-2xl font-bold mb-4'>🔍 Available Skill Listings</div>
      <div className='flex flex-wrap gap-4'>
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
