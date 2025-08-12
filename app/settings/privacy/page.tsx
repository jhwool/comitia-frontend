"use client";
import { useState } from "react";

export default function PrivacySettings() {
  const [isPrivate, setIsPrivate] = useState(false);
  const [personalized, setPersonalized] = useState(true);

  return (
    <div>
      <h1 className="title">Privacy</h1>

      <div className="space-y-6">
        <div className="p-4 border rounded flex items-center justify-between">
          <div>
            <div className="font-semibold">Private profile</div>
            <div className="text-sm text-gray-600">Only approved followers can see your content.</div>
          </div>
          <input type="checkbox" checked={isPrivate} onChange={(e)=>setIsPrivate(e.target.checked)} />
        </div>

        <div className="p-4 border rounded flex items-center justify-between">
          <div>
            <div className="font-semibold">Personalized recommendations</div>
            <div className="text-sm text-gray-600">Use activity to improve suggestions.</div>
          </div>
          <input type="checkbox" checked={personalized} onChange={(e)=>setPersonalized(e.target.checked)} />
        </div>

        <div className="p-4 border rounded">
          <div className="font-semibold mb-2">Your data</div>
          <button className="button-secondary mr-2" type="button">Download data</button>
          <button className="button-secondary" type="button">Clear history</button>
        </div>
      </div>
    </div>
  );
}
