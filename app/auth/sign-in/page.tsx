'use client';

import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Replace with actual sign-in logic (e.g. fetch('/api/signin'))
    if (email === 'test@example.com' && password === 'Password123!') {
      setMessage('Sign-in successful!');
    } else {
      setMessage('Invalid email or password.');
    }
  };

  return (
    <main className="max-w-md mx-auto mt-16 p-6 bg-white dark:bg-black shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            id="password"
            className="input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white dark:bg-white dark:text-black py-2 px-4 rounded hover:opacity-90 transition"
        >
          Sign In
        </button>

        {message && (
          <p className="text-sm text-center mt-4 text-red-600 dark:text-red-400">
            {message}
          </p>
        )}
      </form>
    </main>
  );
}
