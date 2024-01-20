import React from "react";

const VideoBackground = () => {
  const videoUrl = "https://www.youtube.com/embed/BblraEtrFLI";

  return (
    <div className="h-full w-full bg-red-100 ">
      <iframe
        className="w-full lg:h-full h-full"
        title="YouTube Video"
        src={videoUrl}
     
      />
    </div>
  );
};

export default VideoBackground;
