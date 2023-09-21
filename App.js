import {Canvas} from '@react-three/fiber';

export default function App() {
    return (
        <Canvas>
            <pointLight position={[10, 10, 10]}/>
            <ambientLight/>
            <mesh>
                <sphereGeometry/>
                <meshStandardMaterial color="orange"/>
            </mesh>
        </Canvas>
    )
}