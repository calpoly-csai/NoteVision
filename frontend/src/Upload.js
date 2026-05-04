import React, { useState } from "react";

function Upload({ setResponse, setLoading }) {
  const [file, setFile] = useState(null);
  // const [response, setResponse] = useState(null);

  const handleFileChange = (e) => {setFile(e.target.files[0]);};

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("upload_file", file);

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/analyze/", {
        method: "PUT",
        body: formData,
      
      });
      const data = await res.json();
      
      setResponse(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Upload failed: ", error);
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <div className="upload-box">
      <label className="file-input-label">
        <input type="file" onChange={handleFileChange} className="file-input" />
        <span>{file ? file.name : "Choose a note photo"}</span>
      </label>
      <button className="upload-button" disabled={!file} onClick={handleUpload}>
        Analyze Note
      </button>
    </div>
  );
}

export default Upload;