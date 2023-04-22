import { useState } from 'react';
import { TextureLoader, DoubleSide } from 'three';

const textureLoader = new TextureLoader();

const texture1 = textureLoader.load('/static/suculenta2.png');
const texture2 = textureLoader.load('/static/suculenta1.png');

export default function MyImages() {
  const [currentTexture, setCurrentTexture] = useState(texture1);

  const handleDoubleClick = () => {
    if (currentTexture === texture1) {
      setCurrentTexture(texture2);
    } else {
      setCurrentTexture(texture1);
    }
  };

  return (
    <mesh receiveShadow={true} castShadow={true} onDoubleClick={handleDoubleClick}>
      <planeGeometry args={[4, 3]} />
      <meshStandardMaterial side={DoubleSide} map={currentTexture} />
    </mesh>
  );
}