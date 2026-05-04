import React from "react";
import Output from "../Output";


function OutputPanel({ data, loading }) {
  return (
    <section className="panel panel-output">
    
      <h2>Analysis output</h2>
      <Output data={data} loading={loading} />
    </section>
  );
}

export default OutputPanel;
