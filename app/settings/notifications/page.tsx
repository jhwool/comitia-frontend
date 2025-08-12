"use client";
import { useState } from "react";

export default function NotificationSettings() {
  const [emailAll, setEmailAll] = useState(true);
  const [pushComments, setPushComments] = useState(true);

  return (
    <div>
      <h1 className="title">Notifications</h1>

      <div className="p-4 border rounded space-y-4">
        <div className="flex items-center justify-between">
          <span>Email – All updates</span>
          <input type="checkbox" checked={emailAll} onChange={(e)=>setEmailAll(e.target.checked)} />
        </div>
        <div className="flex items-center justify-between">
          <span>Push – Comments & replies</span>
          <input type="checkbox" checked={pushComments} onChange={(e)=>setPushComments(e.target.checked)} />
        </div>
      </div>
    </div>
  );
}
