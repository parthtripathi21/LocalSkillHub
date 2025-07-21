import React, { useState } from 'react';

const Signup = ({ onAuth }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        onAuth(data.user);
      } else {
        alert(data.error || 'Signup failed');
      }
    } catch (err) {
      console.error('Signup error:', err);
      alert('Server error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-xl max-w-md mx-auto mt-10 shadow">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <input
        className="input"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className="input"
        name="email"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        className="input"
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
        Register
      </button>
    </form>
  );
};

export default Signup;
