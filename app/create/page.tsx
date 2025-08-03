// app/create/page.tsx
'use client';

import Link from 'next/link';

export default function CreatePage() {
  return (
    <main className="container">
      {/* Top Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Start New Series</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/create/episode"
            className="bg-blue-100 dark:bg-blue-900 p-6 rounded shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition text-center"
          >
            <h3 className="font-semibold mb-2">Whole Episode Generation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Beginners friendly!</p>
          </Link>
          <Link
            href="/create/frame"
            className="bg-blue-100 dark:bg-blue-900 p-6 rounded shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition text-center"
          >
            <h3 className="font-semibold mb-2">Frame-by-Frame Generation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Pro user’s favorite!</p>
          </Link>
          <Link
            href="/create/character"
            className="bg-blue-100 dark:bg-blue-900 p-6 rounded shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition text-center"
          >
            <h3 className="font-semibold mb-2">Character Generation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Bring characters to life!</p>
          </Link>
          <Link
            href="/create/meme"
            className="bg-blue-100 dark:bg-blue-900 p-6 rounded shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition text-center"
          >
            <h3 className="font-semibold mb-2">Meme Generation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Fun and viral!</p>
          </Link>
        </div>
      </section>

      {/* Bottom Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">My Series</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Placeholder cards - replace with dynamic data */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow flex flex-col justify-between"
            >
              <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded mb-2" />
              <p className="text-sm font-medium">Series Title {i}</p>
              <span className="text-xs text-green-600 dark:text-green-400 mt-1">Published</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
