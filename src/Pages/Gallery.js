import React from "react";
import VideoList from "../data/VideoList.json";
import { VideoCard } from "../Components/VideoCard.js";

export const Gallery = () => {
  console.log(VideoList);
  return (
    <div className="contentContainer gallery">
      <div className="videoContentContainer">
        {VideoList.map(video => (
          <VideoCard video={video} />
        ))}
        <div style={{ flex: "1 0 21%", margin: "2rem" }} />
      </div>
    </div>
  );
};
