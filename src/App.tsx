import "./App.css";

// type Environment = "STAGING" | "PRODUCTION";

export default function App() {
  // const [environment, setEnvironment] = useState<Environment>("STAGING")

  return (
    <main className="container">
      {/* orange outer iframe */}
      <iframe
        className="outer"
        src="https://transak-double-iframe-supporter.vercel.app/"
        allow="camera;microphone;payment"
      />
    </main>
  );
}
