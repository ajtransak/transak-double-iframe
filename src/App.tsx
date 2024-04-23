import { useState } from "react";
import "./App.css";

type Environment = "STAGING" | "PRODUCTION";

export default function App() {
  const [environment, setEnvironment] = useState<Environment>("STAGING");

  const toggleEnvironment = (selectedEnvironment: Environment) => {
    setEnvironment(selectedEnvironment);
  };

  return (
    <main className="container">
      <div className="environment">
        <label htmlFor="dropdown">Select Environment:</label>
        <select
          id="dropdown"
          value={environment}
          onChange={(e) => toggleEnvironment(e.target.value as Environment)}
        >
          <option value="STAGING">Staging</option>
          <option value="PRODUCTION">Production</option>
        </select>
      </div>

      <iframe
        className="outer"
        src={
          environment === "STAGING"
            ? "https://transak-double-iframe-supporter.vercel.app/staging"
            : "https://transak-double-iframe-supporter.vercel.app/production"
        }
        allow="camera;microphone;payment"
      />
    </main>
  );
}
