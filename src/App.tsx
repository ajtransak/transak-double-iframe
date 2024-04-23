import { useState } from "react";
import "./App.css";

type Environment = "STAGING" | "PRODUCTION";

export default function App() {
  const [environment, setEnvironment] = useState<Environment>("STAGING");

  const toggleEnvironment = () => {
    setEnvironment((prevEnvironment) =>
      prevEnvironment === "STAGING" ? "PRODUCTION" : "STAGING"
    );
  };

  return (
    <main className="container">
      <span className="switch">
        <label htmlFor="environmentToggle">
          Current Environment: {environment}
        </label>
        <input
          type="checkbox"
          id="environmentToggle"
          checked={environment === "PRODUCTION"}
          onChange={toggleEnvironment}
        />
        <span className="slider round"></span>
      </span>
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
