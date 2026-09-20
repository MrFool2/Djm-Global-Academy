// import React, { useEffect, useRef, useState, useId } from "react";
// import "./OverviewFrame.css";

// const OverviewFrame = ({
//   videoSrc = "https://hacktoskill.com/opsteam/AiBuilderCup/AiBuilderVideo.webm",
//   videoType = "video/webm",
//   videoLabel = "AI Builder Cup",

//   color = "#fff",

//   top = 40,
//   left = 60,
//   bottom = 40,
//   right = 60,

//   fade = 20,
//   stroke = 0.6,

//   padding = 14,
//   radius = 38,

//   maxWidth = 1200,
// }) => {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);

//   const [size, setSize] = useState({
//     width: 663,
//     height: 385,
//   });

//   const [muted, setMuted] = useState(true);

//   const id = useId().replace(/:/g, "");

//   const topGradientId = `ov-grad-top-${id}`;
//   const leftGradientId = `ov-grad-left-${id}`;
//   const bottomGradientId = `ov-grad-bottom-${id}`;
//   const rightGradientId = `ov-grad-right-${id}`;

//   /*
//    * Measure the frame so the SVG border
//    * always matches the video size.
//    */
//   useEffect(() => {
//     if (!containerRef.current) return;

//     const updateSize = () => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();

//       setSize({
//         width: rect.width,
//         height: rect.height,
//       });
//     };

//     updateSize();

//     const observer = new ResizeObserver(updateSize);

//     observer.observe(containerRef.current);

//     window.addEventListener("resize", updateSize);

//     return () => {
//       observer.disconnect();
//       window.removeEventListener("resize", updateSize);
//     };
//   }, []);

//   /*
//    * Mute / unmute video
//    */
//   const toggleMute = () => {
//     if (!videoRef.current) return;

//     const newMuted = !videoRef.current.muted;

//     videoRef.current.muted = newMuted;

//     setMuted(newMuted);
//   };

//   /*
//    * SVG dimensions
//    */
//   const svgWidth = size.width;
//   const svgHeight = size.height;

//   const strokeWidth = stroke;

//   /*
//    * Radius cannot be larger than the frame.
//    */
//   const r = Math.min(
//     radius,
//     svgWidth / 3,
//     svgHeight / 3
//   );

//   /*
//    * Convert percentage-like values
//    * into actual SVG coordinates.
//    */
//   const topLength =
//     r + top + fade;

//   const leftLength =
//     r + left + fade;

//   const bottomLength =
//     r + bottom + fade;

//   const rightLength =
//     r + right + fade;

//   /*
//    * SVG arm coordinates
//    */
//   const topStart = topLength;
//   const topEnd = r;

//   const leftStart = r;
//   const leftEnd = leftLength;

//   const bottomStart =
//     svgWidth - bottomLength;

//   const bottomEnd =
//     svgWidth - r;

//   const rightStart =
//     svgHeight - rightLength;

//   const rightEnd =
//     svgHeight - r;

//   return (
//     <div
//       ref={containerRef}
//       className="overview-frame"
//       style={{
//         "--ov-color": color,
//         "--ov-pad": `${padding}px`,
//         "--ov-radius": `${radius}px`,
//         "--ov-top": top,
//         "--ov-left": left,
//         "--ov-bottom": bottom,
//         "--ov-right": right,
//         "--ov-fade": fade,
//         "--ov-stroke": stroke,
//         maxWidth: `${maxWidth}px`,
//       }}
//     >
//       {/* SVG decorative border */}
//       <svg
//         className="overview-frame__border"
//         aria-hidden="true"
//         viewBox={`0 0 ${svgWidth} ${svgHeight}`}
//         preserveAspectRatio="none"
//       >
//         <defs>

//           {/* TOP */}
//           <linearGradient
//             id={topGradientId}
//             gradientUnits="userSpaceOnUse"
//             x1={topStart}
//             y1={strokeWidth}
//             x2={topEnd}
//             y2={strokeWidth}
//           >
//             <stop
//               offset="0%"
//               stopColor={color}
//               stopOpacity="0"
//             />

//             <stop
//               offset="45%"
//               stopColor={color}
//               stopOpacity="0.7"
//             />

//             <stop
//               offset="60%"
//               stopColor={color}
//               stopOpacity="1"
//             />

//             <stop
//               offset="100%"
//               stopColor={color}
//               stopOpacity="1"
//             />
//           </linearGradient>

//           {/* LEFT */}
//           <linearGradient
//             id={leftGradientId}
//             gradientUnits="userSpaceOnUse"
//             x1={strokeWidth}
//             y1={leftEnd}
//             x2={strokeWidth}
//             y2={leftStart}
//           >
//             <stop
//               offset="0%"
//               stopColor={color}
//               stopOpacity="0"
//             />

//             <stop
//               offset="45%"
//               stopColor={color}
//               stopOpacity="0.7"
//             />

//             <stop
//               offset="60%"
//               stopColor={color}
//               stopOpacity="1"
//             />

//             <stop
//               offset="100%"
//               stopColor={color}
//               stopOpacity="1"
//             />
//           </linearGradient>

//           {/* BOTTOM */}
//           <linearGradient
//             id={bottomGradientId}
//             gradientUnits="userSpaceOnUse"
//             x1={bottomStart}
//             y1={svgHeight - strokeWidth}
//             x2={bottomEnd}
//             y2={svgHeight - strokeWidth}
//           >
//             <stop
//               offset="0%"
//               stopColor={color}
//               stopOpacity="0"
//             />

//             <stop
//               offset="45%"
//               stopColor={color}
//               stopOpacity="0.7"
//             />

//             <stop
//               offset="60%"
//               stopColor={color}
//               stopOpacity="1"
//             />

//             <stop
//               offset="100%"
//               stopColor={color}
//               stopOpacity="1"
//             />
//           </linearGradient>

//           {/* RIGHT */}
//           <linearGradient
//             id={rightGradientId}
//             gradientUnits="userSpaceOnUse"
//             x1={svgWidth - strokeWidth}
//             y1={rightStart}
//             x2={svgWidth - strokeWidth}
//             y2={rightEnd}
//           >
//             <stop
//               offset="0%"
//               stopColor={color}
//               stopOpacity="0"
//             />

//             <stop
//               offset="45%"
//               stopColor={color}
//               stopOpacity="0.7"
//             />

//             <stop
//               offset="60%"
//               stopColor={color}
//               stopOpacity="1"
//             />

//             <stop
//               offset="100%"
//               stopColor={color}
//               stopOpacity="1"
//             />
//           </linearGradient>

//         </defs>

//         <g
//           className="overview-frame__arms"
//           strokeWidth={strokeWidth}
//           strokeLinecap="round"
//           fill="none"
//         >

//           {/* TOP */}
//           <path
//             d={`M ${topStart} ${strokeWidth}
//                 L ${r + strokeWidth} ${strokeWidth}`}
//             stroke={`url(#${topGradientId})`}
//           />

//           {/* TOP LEFT CORNER */}
//           <path
//             d={`M ${r + strokeWidth} ${strokeWidth}
//                 A ${r} ${r} 0 0 0
//                 ${strokeWidth} ${r + strokeWidth}`}
//             stroke={color}
//           />

//           {/* LEFT */}
//           <path
//             d={`M ${strokeWidth} ${r + strokeWidth}
//                 L ${strokeWidth} ${leftEnd}`}
//             stroke={`url(#${leftGradientId})`}
//           />

//           {/* BOTTOM */}
//           <path
//             d={`M ${bottomStart} ${svgHeight - strokeWidth}
//                 L ${bottomEnd - strokeWidth}
//                 ${svgHeight - strokeWidth}`}
//             stroke={`url(#${bottomGradientId})`}
//           />

//           {/* BOTTOM RIGHT CORNER */}
//           <path
//             d={`M ${bottomEnd - strokeWidth}
//                 ${svgHeight - strokeWidth}
//                 A ${r} ${r} 0 0 0
//                 ${svgWidth - strokeWidth}
//                 ${rightEnd}`}
//             stroke={color}
//           />

//           {/* RIGHT */}
//           <path
//             d={`M ${svgWidth - strokeWidth}
//                 ${rightEnd}
//                 L ${svgWidth - strokeWidth}
//                 ${rightStart}`}
//             stroke={`url(#${rightGradientId})`}
//           />

//         </g>
//       </svg>

//       {/* VIDEO */}
//       <div className="overview-frame__media">

//         <video
//           ref={videoRef}
//           className="overview-frame__photo"
//           autoPlay
//           loop
//           playsInline
//           muted={muted}
//           preload="metadata"
//           aria-label={videoLabel}
//         >
//           <source
//             src={videoSrc}
//             type={videoType}
//           />
//         </video>

//         {/* MUTE BUTTON */}
//         <button
//           type="button"
//           className="overview-frame__mute"
//           onClick={toggleMute}
//           aria-label={muted ? "Unmute" : "Mute"}
//         >
//           {muted ? (
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               aria-hidden="true"
//             >
//               <path
//                 d="M11 5L6 9H2v6h4l5 4V5z"
//                 fill="currentColor"
//               />

//               <line
//                 x1="23"
//                 y1="9"
//                 x2="17"
//                 y2="15"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />

//               <line
//                 x1="17"
//                 y1="9"
//                 x2="23"
//                 y2="15"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//           ) : (
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               aria-hidden="true"
//             >
//               <path
//                 d="M11 5L6 9H2v6h4l5 4V5z"
//                 fill="currentColor"
//               />

//               <path
//                 d="M15.54 8.46a5 5 0 0 1 0 7.07"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />

//               <path
//                 d="M19.07 4.93a10 10 0 0 1 0 14.14"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//           )}
//         </button>

//       </div>
//     </div>
//   );
// };

// export default OverviewFrame;

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