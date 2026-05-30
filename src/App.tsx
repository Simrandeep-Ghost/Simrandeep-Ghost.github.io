import React, { useEffect, useState } from "react";

function App() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => [
        ...prev.slice(-6),
        `[${new Date().toLocaleTimeString()}] Device active | Temp: ${
          Math.floor(Math.random() * 40) + 10
        }°C`,
      ]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "#020617",
        color: "#22c55e",
        fontFamily: "monospace",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "auto" }}>

        {/* HEADER */}
        <h1 style={{ fontSize: "32px" }}>⚡ Simrandeep Singh</h1>
        <p>&gt; systems | iot | linux | debugging</p>

        <hr />

        {/* TERMINAL LOGS */}
        <h2>📡 Live System Logs</h2>

        <div
          style={{
            background: "#000",
            padding: "15px",
            height: "200px",
            overflow: "auto",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>

        <hr />

        {/* PROJECT CARDS */}
        <h2>🚀 Projects</h2>

        <div style={{ display: "grid", gap: "15px" }}>
          
          <div style={{
            background: "#0f172a",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h3>IoT Monitoring System</h3>
            <p>Real-time MQTT-based sensor tracking with alerts.</p>
          </div>

          <div style={{
            background: "#0f172a",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h3>Linux Automation Toolkit</h3>
            <p>System automation scripts using cron and bash.</p>
          </div>

          <div style={{
            background: "#0f172a",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h3>Android Debugging Toolkit</h3>
            <p>ADB-based diagnostics and troubleshooting workflows.</p>
          </div>

        </div>

        <hr />

        {/* ARCHITECTURE BLOCK */}
        <h2>⚙️ System Architecture</h2>

        <pre style={{
          background: "#000",
          padding: "15px",
          borderRadius: "8px"
        }}>
{`ESP32 → MQTT Broker → Backend → Dashboard
         ↓
       Storage`}
        </pre>

        <hr />

        {/* CONTACT */}
        <h2>📧 Contact</h2>

        <p>Email: your@email.com</p>

        <p>
          GitHub:
          <a
            href="https://github.com/Simrandeep-Ghost"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#38bdf8", marginLeft: "10px" }}
          >
            Visit Profile
          </a>
        </p>

      </div>
    </div>
  );
}

export default App;