// app/settings/page.tsx
export default function SettingsOverview() {
  return (
    <div>
      <h1 className="title">Settings</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Manage your account, security, privacy, and notifications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="p-4 rounded border">
          <h2 className="font-semibold mb-2">Account</h2>
          <p className="text-sm text-gray-600">Profile, email, password, sessions.</p>
        </div>
        <div className="p-4 rounded border">
          <h2 className="font-semibold mb-2">Security</h2>
          <p className="text-sm text-gray-600">Two-factor authentication, device approvals.</p>
        </div>
        <div className="p-4 rounded border">
          <h2 className="font-semibold mb-2">Privacy</h2>
          <p className="text-sm text-gray-600">Profile visibility, data & history controls.</p>
        </div>
        <div className="p-4 rounded border">
          <h2 className="font-semibold mb-2">Notifications</h2>
          <p className="text-sm text-gray-600">Email / push categories and frequency.</p>
        </div>
      </div>
    </div>
  );
}
