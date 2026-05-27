"use client";

import React, { useRef, useState } from "react";
import styles from "./videoCard.module.css";
import { Play, Pause } from "lucide-react";

interface VideoCardProps {
  video: {
    id: number;
    videoUrl: string;
    duration: string;
    title: string;
    views: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.videoCard} onClick={togglePlay}>
      <div className={styles.videoImgWrapper}>
        <video
          ref={videoRef}
          className={styles.videoImg}
          src={`${video.videoUrl}#t=0.001`}
          preload="metadata"
          playsInline
          onEnded={() => setIsPlaying(false)}
        />

        <div
          className={`${styles.videoImgOverlay} ${isPlaying ? styles.hidden : ""}`}
        />
        {!isPlaying && (
          <span className={styles.videoDuration}>{video.duration}</span>
        )}

        <div
          className={`${styles.playBtn} ${isPlaying ? styles.isPlaying : ""}`}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </div>
      </div>

      <div className={styles.videoContent}>
        <h3 className={styles.videoTitle}>{video.title}</h3>
        <p className={styles.videoViews}>{video.views}</p>
      </div>
    </div>
  );
};

export default VideoCard;
