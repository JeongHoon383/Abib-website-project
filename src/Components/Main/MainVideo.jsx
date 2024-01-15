import React from "react";

const MainVideo = () => {
  return (
    <div className="aspect-video w-screen overflow-x-hidden  p-0 md:mt-20">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="box-border h-full w-full p-0"
        src="./home/mainVideo.mp4"
      ></video>
    </div>
  );
};

export default MainVideo;
