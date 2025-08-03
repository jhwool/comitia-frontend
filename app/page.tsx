export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        Welcome to <span className="text-blue-600">Comitia</span>
      </h1>
      <p className="text-lg text-center max-w-xl mb-8">
        Create, share, and explore AI-powered comics and characters.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="/auth/sign-in" className="button-primary text-center">
          Sign In
        </a>
        <a
          href="/auth/sign-up"
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition px-6 py-2 rounded text-center"
        >
          Sign Up
        </a>
      </div>
    </main>
  );
}


