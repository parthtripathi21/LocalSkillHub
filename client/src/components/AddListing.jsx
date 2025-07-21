import React, { useState } from 'react';

const AddListing = ({ onListingAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    price: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:5000/api/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      onListingAdded(data); 
      setFormData({ title: '', description: '', location: '', price: '', category: '' });
    } else {
      alert(data.error || 'Error adding listing');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-xl shadow-lg mb-6 max-w-xl">
      <h2 className="text-xl font-bold mb-3">➕ Post a New Skill Listing</h2>
      <input className="input" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
      <textarea className="input" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input className="input" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
      <input className="input" name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} />
      <input className="input" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add Listing</button>
    </form>
  );
};

export default AddListing;
