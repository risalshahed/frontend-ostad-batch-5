import { useState, useEffect } from "react";

export default function SettingsPanel() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.className = darkMode ? "bg-gray-900 text-white" : "bg-white text-black";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="p-4">
      <h2>Theme Settings</h2>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
          Dark Mode
      </label>
    </div>
  );
}