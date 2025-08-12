export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        Welcome to <span className="text-blue-600">Comitia</span>
      </h1>

      <p className="text-lg text-center max-w-xl mb-10">
        Create, share, and explore AI-powered comics, characters, and memes.
      </p>

      {/* Primary actions from landing */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="/auth/sign-in" className="button-primary text-center">
          Sign In
        </a>
        <a href="/auth/sign-up" className="button-secondary text-center">
          Sign Up
        </a>
        <a href="/create" className="button-secondary text-center">
          Create
        </a>
        <a href="/settings" className="button-secondary text-center">
          Settings
        </a>
      </div>
    </main>
  );
}



