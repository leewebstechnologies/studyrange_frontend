"use client";

import React, { useRef, useState } from "react";
import styles from "./videoCard.module.css";
import { Play } from "lucide-react";

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

  const togglePlay = async () => {
    if (!videoRef.current) return;

    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.error("Playback error:", err);
    }
  };

  return (
    <div className={styles.videoCard}>
      <div
        className={styles.videoImgWrapper}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          className={styles.videoImg}
          playsInline
          preload="metadata"
          muted
          controls
          width="100%"
        >
          <source
            src={video.videoUrl}
            type="video/mp4"
          />
        </video>

        {!isPlaying && (
          <>
            <div className={styles.videoImgOverlay} />

            <div className={styles.playBtn}>
              <Play size={20} />
            </div>

            <span className={styles.videoDuration}>
              {video.duration}
            </span>
          </>
        )}
      </div>

      <div className={styles.videoContent}>
        <h3 className={styles.videoTitle}>
          {video.title}
        </h3>

        <p className={styles.videoViews}>
          {video.views}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;