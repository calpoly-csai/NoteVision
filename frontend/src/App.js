import React, { useState } from "react";
import Hero from "./components/Hero";
import UploadPanel from "./components/UploadPanel";
import OutputPanel from "./components/OutputPanel";
import "./App.css";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(null);

  return (
    <div className="app-shell">
      <Hero />
      <main className="main-grid">
        <UploadPanel setResponse={setResponse} setLoading={setLoading} loading={loading}/>
        <OutputPanel data={response} loading={loading} />
      </main>
    </div>
  );
}

export default App