"use client";
import { useState } from "react";

export default function ContentSettings() {
  const [autoplay, setAutoplay] = useState(true);
  const [caption, setCaption] = useState("Off");

  return (
    <div>
      <h1 className="title">Content & Playback</h1>

      <div className="space-y-6">
        <div className="p-4 border rounded flex items-center justify-between">
          <span className="font-semibold">Autoplay</span>
          <input type="checkbox" checked={autoplay} onChange={(e)=>setAutoplay(e.target.checked)} />
        </div>

        <div className="p-4 border rounded">
          <div className="font-semibold mb-2">Captions</div>
          <select className="input" value={caption} onChange={(e)=>setCaption(e.target.value)}>
            <option>Off</option>
            <option>Auto</option>
            <option>English</option>
          </select>
        </div>
      </div>
    </div>
  );
}
