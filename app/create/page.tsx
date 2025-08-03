'use client';

import { useState } from 'react';

export default function CreatePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Creating: ${title}`);
  };

  return (
    <div className="container">
      <h1 className="title">Create New Comic</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label" htmlFor="title">Title</label>
          <input id="title" className="input" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label className="label" htmlFor="description">Description</label>
          <textarea
            id="description"
            className="input"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button-primary">Create</button>
      </form>
    </div>
  );
}
