import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const NeuralParticles = (props) => {
    const ref = useRef();
    // Generate 5000 particles in a sphere
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 }), []);

    useFrame((state, delta) => {
        // Rotation
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;

        // Pulse effect
        const t = state.clock.getElapsedTime();
        ref.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.05);
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00f3ff"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                    blending={2} // Additive blending
                />
            </Points>
        </group>
    );
};

// Outer connecting lines or "Cortex" shell
const CortexShell = () => {
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.x += delta / 10;
        ref.current.rotation.y += delta / 15;
    });

    return (
        <points ref={ref}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <pointsMaterial color="#6366f1" size={0.002} transparent opacity={0.2} />
        </points>
    )
}


const NeuralCore = () => {
    return (
        <div className="w-full h-full absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <fog attach="fog" args={['#020617', 2, 6]} />
                <NeuralParticles />
                <CortexShell />
            </Canvas>
        </div>
    );
};

export default NeuralCore;
