import React, { useEffect, useRef, useState } from "react";

import "./OverviewFrame.css";

const OverviewFrame = ({
  videos = [],
  interval = 6000,
  color = "#fff",
  padding = 14,
  radius = 38,
  maxWidth = 1190,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  // Automatic carousel
  useEffect(() => {
    if (videos.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [videos.length, interval]);

  // Reset video whenever slide changes
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;
    video.muted = muted;

    video.play().catch(() => {});
  }, [currentSlide, muted]);

  if (!videos.length) {
    return null;
  }

  const currentVideo = videos[currentSlide];

  return (
    <div
      className="overview-frame"
      style={{
        "--ov-color": color,
        "--ov-pad": `${padding}px`,
        "--ov-radius": `${radius}px`,
        maxWidth: `${maxWidth}px`,
      }}
    >
      {/* SVG frame */}
      <svg
        className="overview-frame__border"
        aria-hidden="true"
        viewBox="0 0 663 385"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="ov-grad-top"
            x1="265"
            y1="0"
            x2="38"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={color} stopOpacity="0" />
            <stop offset="1" stopColor={color} stopOpacity="1" />
          </linearGradient>

          <linearGradient
            id="ov-grad-left"
            x1="0"
            y1="38"
            x2="0"
            y2="231"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={color} stopOpacity="1" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="ov-grad-bottom"
            x1="398"
            y1="385"
            x2="625"
            y2="385"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={color} stopOpacity="0" />
            <stop offset="1" stopColor={color} stopOpacity="1" />
          </linearGradient>

          <linearGradient
            id="ov-grad-right"
            x1="663"
            y1="347"
            x2="663"
            y2="154"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={color} stopOpacity="1" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M 265.28 0.4 L 38.4 0.4"
          stroke="url(#ov-grad-top)"
        />

        <path
          d="M 38.4 0.4 A 38 38 0 0 0 0.4 38.4"
          stroke={color}
        />

        <path
          d="M 0.4 38.4 L 0.4 230.92"
          stroke="url(#ov-grad-left)"
        />

        <path
          d="M 397.72 384.6 L 624.6 384.6"
          stroke="url(#ov-grad-bottom)"
        />

        <path
          d="M 624.6 384.6 A 38 38 0 0 0 662.6 346.6"
          stroke={color}
        />

        <path
          d="M 662.6 346.6 L 662.6 154.08"
          stroke="url(#ov-grad-right)"
        />
      </svg>

      {/* Video */}
      <div className="overview-frame__media">
        <video
          ref={videoRef}
          key={currentVideo.src}
          className="overview-frame__photo"
          autoPlay
          loop
          muted={muted}
          playsInline
          preload="metadata"
        >
          <source
            src={currentVideo.src}
            type={currentVideo.type || "video/mp4"}
          />
        </video>

        {/* Mute */}
        <button
          type="button"
          className="overview-frame__mute"
          onClick={() => setMuted((prev) => !prev)}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? "🔇" : "🔊"}
        </button>

        {/* Dots */}
        {videos.length > 1 && (
          <div className="overview-frame__dots">
            {videos.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`overview-frame__dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OverviewFrame;