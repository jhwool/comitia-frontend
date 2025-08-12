// app/settings/layout.tsx
import Link from "next/link";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const items = [
    { href: "/settings", label: "Overview" },
    { href: "/settings/account", label: "Account" },
    { href: "/settings/security", label: "Security" },
    { href: "/settings/privacy", label: "Privacy" },
    { href: "/settings/notifications", label: "Notifications" },
    { href: "/settings/content", label: "Content & Playback" },
    { href: "/settings/billing", label: "Billing" },          // optional
    { href: "/settings/creator", label: "Creator Tools" },     // optional
    { href: "/settings/accessibility", label: "Accessibility" },
  ];

  return (
    <div className="container grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">
      <aside className="bg-gray-100 dark:bg-gray-800 p-4 rounded h-max sticky top-4">
        <nav className="space-y-2">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              {it.label}
            </Link>
          ))}
        </nav>
      </aside>
      <section className="min-h-[60vh]">{children}</section>
    </div>
  );
}
