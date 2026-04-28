import React, {useState } from "react";
import Upload from "./Upload";
import Output from "./Output";
// import mockData from "./mockdata.json";


function App() {
const [response, setResponse] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>NoteVision Upload</h1>
      <Upload 
      response={response}
      setResponse={setResponse} />
      <Output data={response} />
    </div>
  );
}

export default App