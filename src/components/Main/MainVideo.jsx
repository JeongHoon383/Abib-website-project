import React from "react";

const MainVideo = () => {
  return (
    <div className="md:mt-20  p-0 aspect-video">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="w-full h-full box-border p-0"
        src="./home/mainVideo.mp4"></video>
    </div>
  );
};

export default MainVideo;
