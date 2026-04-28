import React, {useState } from "react";

function Upload(props) {
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

    try {
      const res = await fetch("http://localhost:8000/analyze/", {
        method: "PUT",
        body: formData,
      
      });
      const data = await res.json();
      props.setResponse(data);
    
    } catch (error){
      console.error("Upload failed: ", error);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input type="file" onChange={handleFileChange} />
      <button style={{ marginLeft: "10px" }} onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default Upload;