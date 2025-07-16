export default function SignInPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      <form className="flex flex-col gap-4 w-full max-w-sm">
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="password" placeholder="Password" className="p-2 border rounded" />
        <button className="bg-black text-white p-2 rounded hover:bg-gray-800">Login</button>
      </form>
    </main>
  );
}