export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 dark:bg-gray-950 dark:text-white px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        Welcome to <span className="text-blue-600">Comitia</span>
      </h1>
      <p className="text-lg text-center max-w-xl mb-8">
        Create, share, and explore AI-powered comics and characters.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/auth/signin"
          className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Sign In
        </a>
        <a
          href="/auth/signup"
          className="px-6 py-3 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
        >
          Sign Up
        </a>
      </div>
    </main>
  );
}

