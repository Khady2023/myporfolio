import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
 
const Earth = () => {
    const planet = useGLTF('./earth/scene.gltf')
  return (
    <primitive 
    object={planet.scene}
    scale={1.8}
    position-y={0}
    rotation-y={0}
    />
  )
}

const EarthCanvas =()=>{
    return(
        <Canvas
         shadows
         frameloop='demand'
         gl={{preserveDrawingBuffer: true}}
         camera={{ 
            fov: 15,
            near: 0.1,
            far: 200,
            position: [-35, 10, 10]
        }}
        >
            <Suspense>
                <OrbitControls 
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2}
                />
                <Earth />
                {/* Adding lights */}
                <ambientLight intensity={1.2} /> {/* Ambient light */}
                <directionalLight intensity={0.8} position={[5, 5, 5]} /> {/* Directional light */}
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default EarthCanvas
