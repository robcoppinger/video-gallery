import React from "react";
import styles from "./VideoCard.module.scss";
import ReactGA from "react-ga";

export const VideoCard = ({ video }) => {
  const onClick = e => {
    ReactGA.event({
      category: "Video",
      action: "play",
      label: video.id,
      nonInteraction: true
    });
  };
  return (
    <div className={styles.videoCardContainer}>
      <div className={styles.imageContainer}>
        <a href={video.video} onClick={onClick} target="blank">
          <img src={video.thumbnail} />
          <div className={styles.titleContainer}>
            <h3>{video.title}</h3>
          </div>
        </a>
      </div>
      <div className={styles.infoContainer}>
        {video.starring.length > 0 && (
          <p>
            <b>Starring: </b>
            {video.starring.join(", ")}
          </p>
        )}
        {video.featuring.length > 0 && (
          <p>
            <b>Featuring: </b>
            {video.featuring.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
};
