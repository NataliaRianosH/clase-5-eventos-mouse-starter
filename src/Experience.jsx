import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import MyVideo from './MyVideo'
import MyImages from './MyImages'
export default function Experience() {
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        
        <directionalLight castShadow shadow-normalBias={ 0.04 } position={[1, 2, 3]} intensity={1.5} />
         
        <ambientLight intensity={0.5} />
        <Sky />
        <mesh position={ [ -1, 0, 0] } >
        <MyVideo />
        
        </mesh>
        <mesh position={ [ 1, 0, 2] } rotation={[0, Math.PI / 2, 0]} >
        <MyImages/>
        </mesh>
      
     
    </>
}