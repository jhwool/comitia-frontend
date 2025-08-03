'use client';

import { useState } from 'react';

export default function SignUpPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    nickname: '',
    birthdate: '',
    gender: '',
    country: '',
    genre: '',
    recommender: '',
    membership: '',
    discountCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Sign up submitted');
  };

  return (
    <div className="container">
      <h1 className="title">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="input" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input className="input" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <input className="input" name="nickname" placeholder="Nickname" value={form.nickname} onChange={handleChange} required />
        <input className="input" name="birthdate" type="date" value={form.birthdate} onChange={handleChange} required />
        <input className="input" name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} required />
        <input className="input" name="country" placeholder="Country" value={form.country} onChange={handleChange} required />
        <input className="input" name="genre" placeholder="Preferred Genre" value={form.genre} onChange={handleChange} />
        <input className="input" name="recommender" placeholder="Recommender" value={form.recommender} onChange={handleChange} />
        <input className="input" name="membership" placeholder="Membership Type" value={form.membership} onChange={handleChange} />
        <input className="input" name="discountCode" placeholder="Discount Code" value={form.discountCode} onChange={handleChange} />
        <button type="submit" className="button-primary">Sign Up</button>
      </form>
    </div>
  );
}

