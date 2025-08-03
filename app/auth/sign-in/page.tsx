'use client';

import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just simulate a login result
    if (email === 'test@example.com' && password === 'password') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid email or password.');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Sign In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="label">Email</label>
          <input
            id="email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="label">Password</label>
          <input
            id="password"
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button-primary">Sign In</button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
}

