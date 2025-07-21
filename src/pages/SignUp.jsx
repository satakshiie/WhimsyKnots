import React, { useState } from 'react';
import bgyarn from "../assets/bgyarn.png"

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    console.log("Signup data: ", formData);
    // TODO: Send to backend
  };

  return (
<section className="min-h-screen w-full px-6 flex items-center justify-center"  style={{
        backgroundImage: `url(${bgyarn})`,
      }}>
    <div className="max-w-md mx-auto mt-24 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-5">Create an Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
        <button type="submit" className="w-full bg-yarnGreen text-white py-2 rounded hover:bg-green-700 transition">Sign Up</button>
      </form>
    </div>
    </section>
  );
};

export default Signup;