import React from "react";

export const Footer = () => (
  <div className="footer">
    <div className="contentContainer footerContent">
      <div style={{ alignSelf: "center" }}>
        <p>
          &copy; 2020 <b>Rob Coppinger</b>
        </p>
      </div>
      <div className="footerIcons">
        <a href="https://www.instagram.com/rob.coppinger/">
          <img
            className="footerIcon"
            src={require("../images/IG_Glyph_Fill.png")}
          />
        </a>
        <a href="https://github.com/robcoppinger/video-gallery">
          <img
            className="footerIcon"
            src={require("../images/GitHub-Mark-Light-64px.png")}
          />
        </a>
      </div>
    </div>
  </div>
);
