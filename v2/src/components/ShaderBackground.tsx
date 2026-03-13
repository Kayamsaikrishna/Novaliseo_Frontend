import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Full-screen fluid shader — themed to Novaliseo's cyan/blue palette
const vertexShader = `
  uniform float time;
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const fragmentShader = `
  precision highp float;
  
  uniform float time;
  uniform vec2 resolution;
  uniform vec3 colorA;   // Deep navy/dark blue
  uniform vec3 colorB;   // Cyan
  uniform vec3 colorC;   // Bright blue
  
  varying vec2 vUv;
  
  // Smooth noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float freq = 1.0;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p * freq);
      freq *= 2.1;
      amplitude *= 0.5;
    }
    return value;
  }
  
  void main() {
    vec2 uv = vUv;
    float t = time * 0.12;
    
    // Flowing distortion
    vec2 q = vec2(
      fbm(uv + vec2(0.0, 0.0)),
      fbm(uv + vec2(5.2, 1.3))
    );
    
    vec2 r = vec2(
      fbm(uv + 4.0 * q + vec2(1.7 + t * 0.3, 9.2)),
      fbm(uv + 4.0 * q + vec2(8.3 + t * 0.2, 2.8 + t * 0.1))
    );
    
    float f = fbm(uv + 4.0 * r);
    
    // Layer the brand colors based on the flow value
    vec3 color = mix(colorA, colorB, clamp(f * 2.0, 0.0, 1.0));
    color = mix(color, colorC, clamp(f * f * 4.0, 0.0, 1.0));
    
    // Edge vignette to keep it dark at edges
    float vignette = 1.0 - length(uv - 0.5) * 1.4;
    vignette = clamp(vignette, 0.0, 1.0);
    
    // Keep overall brightness subtle so content is readable
    float alpha = vignette * 0.55 * (0.5 + f * 0.5);
    
    gl_FragColor = vec4(color, alpha);
  }
`

function FluidBackground() {
  const mesh = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      colorA: { value: new THREE.Color("#020617") },  // Dark navy
      colorB: { value: new THREE.Color("#0e7490") },  // Cyan mid
      colorC: { value: new THREE.Color("#3b82f6") },  // Brand blue
    }),
    [],
  )

  useFrame((state) => {
    uniforms.time.value = state.clock.elapsedTime
  })

  return (
    <mesh ref={mesh}>
      {/* Full-screen quad — covers the entire viewport */}
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

export function ShaderBackground() {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 1], near: 0, far: 10, zoom: 1 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ alpha: true, antialias: false }}
    >
      <FluidBackground />
    </Canvas>
  )
}
