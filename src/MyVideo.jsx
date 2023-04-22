import { useState } from 'react';
import { VideoTexture, DoubleSide } from 'three';

const video = document.createElement('video');
video.src = '/static/KnockKnock.mp4';
video.loop = true;
video.muted=false;
video.autoplay = true;

const videoTexture = new VideoTexture(video);

export default function MyVideo() {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleClick = () => {
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <mesh receiveShadow={true} castShadow={true} onClick={handleClick}>
      <planeGeometry args={[4, 3]} />
      <meshStandardMaterial side={DoubleSide} map={videoTexture} />
    </mesh>
  );
}