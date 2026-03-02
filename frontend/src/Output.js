import React from "react";

function Results({ data }) {
  return (
    <div style={{ background: "#808ded", padding: "15px", borderRadius: "8px" }}>
      <h2>Results</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Results; 