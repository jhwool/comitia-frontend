// app/components/NavBar.tsx
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-gray-200 dark:bg-gray-800 p-2 flex justify-center gap-6 text-sm">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/auth/sign-in" className="hover:underline">Sign In</Link>
      <Link href="/auth/sign-up" className="hover:underline">Sign Up</Link>
      <Link href="/create" className="hover:underline">Create</Link>
    </nav>
  );
}

