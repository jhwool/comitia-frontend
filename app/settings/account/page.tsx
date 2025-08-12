"use client";
import { useState } from "react";

export default function AccountSettings() {
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1 className="title">Account</h1>

      <form className="space-y-6">
        <div>
          <label className="label">Display name</label>
          <input className="input" value={displayName} onChange={(e)=>setDisplayName(e.target.value)} />
        </div>

        <div>
          <label className="label">Bio</label>
          <textarea className="input" rows={3} value={bio} onChange={(e)=>setBio(e.target.value)} />
        </div>

        <div>
          <label className="label">Email</label>
          <input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div className="flex gap-3">
          <button className="button-primary" type="button">Save</button>
          <button className="button-secondary" type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}
