import React from "react";
import styles from "./VideoCard.module.scss";

export const VideoCard = ({ video }) => (
  <div className={styles.videoCardContainer}>
    <div className={styles.imageContainer}>
      <a href={video.video} target="blank">
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
