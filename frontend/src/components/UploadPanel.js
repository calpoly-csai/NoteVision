import React from "react";
import Upload from "../Upload";
function UploadPanel({ setResponse, setLoading, loading }) {
  return (
    <section className="panel panel-upload">
      <h2>Upload your note</h2>
      <p>Select a photo of a written note page and press Analyze.</p>
      <Upload setResponse={setResponse} setLoading={setLoading} loading={loading} />
    </section>
  );
}

export default UploadPanel;
