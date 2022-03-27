import "./App.css";
import "./style.css";
import React from "react";
import imageInSrc from "./imageInSrc.jpg";
import video1 from "./videos/myVideo.mp4";

function App() {
  const mystyle = {
    border: "solid 1px black",
    maxWidth: "100vw",
  };
  return (
    <div>
      <div style={mystyle}>
        <h1 className="title red">Faycal</h1>
        <br />
        <img src={imageInSrc} alt="lorem picsum" />
        <br />
        <img src="/imageInPublic.jpg" alt="lorem picsum" />
      </div>
      <video
        src={video1}
        width="320"
        height="240"
        controls="controls"
        autoplay="true"
      />
    </div>
  );
}

export default App;
