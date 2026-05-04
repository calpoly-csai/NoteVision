import React from "react";
import PulseLoader from "react-spinners/PulseLoader";


function Output({ data, loading }) {
  if(loading){
    return (
    
      <div className="output-placeholder">
        <PulseLoader 
        color='#6d6dff'
        loading={loading}
        size={25}
        aria-label="Loading spinner"
    />
      </div>
    
    );
  
  }
  if (!data) {
    return (
      <div className="output-placeholder">
        No note has been analyzed yet. Upload a photo to see the parsed JSON output.
      </div>
    );
  }

  const preview = typeof data === "object" ? JSON.stringify(data, null, 2) : data;

  return (
  
    <div className="output-card">
      <div className="output-header">
      
        <span>NoteVision results</span>
        <span className="output-status">Analyzed</span>
      </div>
      <pre>{preview}</pre>
    </div>
  );
}

export default Output; 