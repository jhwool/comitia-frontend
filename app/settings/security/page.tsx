"use client";
import { useState } from "react";

export default function SecuritySettings() {
  const [twoFA, setTwoFA] = useState(false);

  return (
    <div>
      <h1 className="title">Security</h1>

      <div className="space-y-6">
        <div className="p-4 border rounded">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">Two-Factor Authentication</div>
              <div className="text-sm text-gray-600">Add an extra layer of security to your account.</div>
            </div>
            <button
              className="button-primary"
              onClick={() => setTwoFA((v) => !v)}
              type="button"
            >
              {twoFA ? "Disable 2FA" : "Enable 2FA"}
            </button>
          </div>
        </div>

        <div className="p-4 border rounded">
          <div className="font-semibold mb-2">Active Sessions</div>
          <p className="text-sm text-gray-600">List and revoke logged-in devices.</p>
        </div>
      </div>
    </div>
  );
}
