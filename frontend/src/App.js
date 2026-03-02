import React from "react";
import Upload from "./Upload";
import Output from "./Output";
import mockData from "./mockdata.json";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>NoteVision Upload</h1>
      <Upload />
      <Output data={mockData} />
    </div>
  );
}

export default App