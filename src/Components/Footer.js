import React from "react";
import ReactGA from "react-ga";

export const Footer = () => (
  <div className="footer">
    <div className="contentContainer footerContent">
      <div style={{ alignSelf: "center" }}>
        <p>
          &copy; 2020 <b>Rob Coppinger</b>
        </p>
      </div>
      <div className="footerIcons">
        <ReactGA.OutboundLink
          eventLabel="Instagram Link Clicked"
          to="https://www.instagram.com/rob.coppinger/"
          target="_blank"
        >
          <img
            className="footerIcon"
            src={require("../images/IG_Glyph_Fill.png")}
            alt="Instagram icon"
          />
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="GitHub Link Clicked"
          to="https://github.com/robcoppinger/video-gallery"
          target="_blank"
        >
          <img
            className="footerIcon"
            src={require("../images/GitHub-Mark-Light-64px.png")}
            alt="Github icon"
          />
        </ReactGA.OutboundLink>
      </div>
    </div>
  </div>
);
