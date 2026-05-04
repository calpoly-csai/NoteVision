import React from "react";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-copy">
        <span className="eyebrow">NoteVision</span>
        <h1>Turn photos of your notes into study-ready insight</h1>
        <p>
          Upload an image of your handwritten notes and let NoteVision extract
          structure, key concepts, and useful details from your page.
        </p>
      </div>
      <div className="hero-graphic">
        <div className="hero-card">
          <h2>What you get</h2>
          <ul>
            <li>Clean parsed output from your note image</li>
            <li>Organized JSON results for easy review</li>
            <li>Faster studying with smarter note understanding</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Hero;
