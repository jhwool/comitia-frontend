'use client';

import { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
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

  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters and include letters, numbers, and symbols';
    }
    if (!formData.nickname) newErrors.nickname = 'Nickname is required';
    if (!formData.birthdate) newErrors.birthdate = 'Birthdate is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.membership) newErrors.membership = 'Membership is required';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // Replace with actual signup API call
    setMessage('Sign-up successful! Please check your email for verification.');
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border" onChange={handleChange} />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input type="password" name="password" placeholder="Password" className="w-full p-2 border" onChange={handleChange} />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

        <input type="text" name="nickname" placeholder="Nickname" className="w-full p-2 border" onChange={handleChange} />
        {errors.nickname && <p className="text-red-500 text-sm">{errors.nickname}</p>}

        <input type="date" name="birthdate" className="w-full p-2 border" onChange={handleChange} />
        {errors.birthdate && <p className="text-red-500 text-sm">{errors.birthdate}</p>}

        <select name="gender" className="w-full p-2 border" onChange={handleChange} defaultValue="">
          <option value="" disabled>Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}

        <input type="text" name="country" placeholder="Country" className="w-full p-2 border" onChange={handleChange} />
        {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

        <input type="text" name="genre" placeholder="Favorite Genre" className="w-full p-2 border" onChange={handleChange} />

        <input type="text" name="recommender" placeholder="Recommender (optional)" className="w-full p-2 border" onChange={handleChange} />

        <select name="membership" className="w-full p-2 border" onChange={handleChange} defaultValue="">
          <option value="" disabled>Select Membership</option>
          <option value="Free">Free</option>
          <option value="Premium">Premium</option>
          <option value="Creator">Creator</option>
          <option value="Production">Production</option>
          <option value="Ads">Ads</option>
        </select>
        {errors.membership && <p className="text-red-500 text-sm">{errors.membership}</p>}

        <input type="text" name="discountCode" placeholder="Discount Code (optional)" className="w-full p-2 border" onChange={handleChange} />

        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Register
        </button>
      </form>

      {message && <p className="text-green-600 mt-4">{message}</p>}
    </div>
  );
}
