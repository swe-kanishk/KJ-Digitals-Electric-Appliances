import React from 'react';

const VideoAdd = ({ videoUrl }) => {
  return (
    <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src={videoUrl}
        title="Pinterest Video"
        frameBorder="0"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoAdd;
