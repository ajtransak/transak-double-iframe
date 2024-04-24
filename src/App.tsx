import { ChangeEvent, useState } from "react";
import "./App.css";
import { useSearchParams } from "react-router-dom";

type Environment = "STAGING" | "PRODUCTION";

export default function App() {
  const [searchParams] = useSearchParams();

  const [environment, setEnvironment] = useState<Environment>(
    (searchParams.get("environment") as Environment) || "STAGING"
  );

  const [apiKey, setApiKey] = useState<string>(
    searchParams.get("apiKey") || ""
  );

  const toggleEnvironment = (selectedEnvironment: Environment) => {
    setEnvironment(selectedEnvironment);
  };

  const handleApiChange = (e: ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const apiUrl =
    environment === "STAGING"
      ? `https://transak-double-iframe-supporter.vercel.app/staging?environment=${environment}`
      : `https://transak-double-iframe-supporter.vercel.app/production?environment=${environment}`;

  const finalUrl = `${apiUrl}${apiKey ? `&apiKey=${apiKey}` : ""}`;

  return (
    <main className="container">
      <div className="content">
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

      <div className="content">
        <span>API Key</span>
        <input type="text" value={apiKey} onChange={handleApiChange} />
      </div>

      <iframe
        className="outer"
        src={finalUrl}
        allow="camera;microphone;payment"
      />

      <GitHubRepo />
    </main>
  );
}

export const GitHubRepo = () => {
  return (
    <a
      className="github"
      href="https://github.com/ashutosh887/transak-double-iframe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
        className="logo"
        alt="GitHub Logo"
      />
    </a>
  );
};
