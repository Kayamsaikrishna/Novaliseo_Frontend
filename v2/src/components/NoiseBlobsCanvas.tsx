import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// 3D Simplex Noise Shader Code
const noiseGLSL = `
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float snoise(vec3 v){
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
  i = mod(i, 289.0 );
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
}
`;

const vertexShader = `
${noiseGLSL}

uniform float uTime;
uniform float uSpeed;
uniform float uDisplacement;
uniform float uFrequency;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying float vNoise;

void main() {
  vec3 norm = normalize(normal);
  float t = uTime * uSpeed;
  
  // Dual-octave organic noise displacement
  float n1 = snoise(position * uFrequency + vec3(0.0, t * 0.35, 0.0));
  float n2 = snoise(position * (uFrequency * 2.1) + vec3(t * 0.5, 0.0, t * 0.25)) * 0.38;
  float totalNoise = n1 + n2;
  
  vec3 displacedPos = position + norm * (totalNoise * uDisplacement);
  vNormal = normalMatrix * norm;
  vPosition = displacedPos;
  vWorldPosition = (modelMatrix * vec4(displacedPos, 1.0)).xyz;
  vNoise = totalNoise;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPos, 1.0);
}
`;

const fragmentShader = `
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uColor5;
uniform float uBandScale;
uniform float uTime;
uniform float uSpeed;
uniform vec3 uLightPos;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying float vNoise;

// Banded palette interpolation (creates the liquid poured paint rings)
vec3 samplePalette(float t) {
  t = fract(t);
  if (t < 0.2) return mix(uColor1, uColor3, t / 0.2);
  if (t < 0.4) return mix(uColor3, uColor2, (t - 0.2) / 0.2);
  if (t < 0.6) return mix(uColor2, uColor4, (t - 0.4) / 0.2);
  if (t < 0.8) return mix(uColor4, uColor5, (t - 0.6) / 0.2);
  return mix(uColor5, uColor1, (t - 0.8) / 0.2);
}

void main() {
  // Banded horizontal contour with domain noise distortion
  float bandCoord = (vPosition.y * uBandScale) + (vNoise * 1.6) + (vPosition.x * 0.22) + (uTime * uSpeed * 0.07);
  vec3 baseColor = samplePalette(bandCoord);

  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPosition);
  vec3 L = normalize(uLightPos - vWorldPosition);
  vec3 H = normalize(L + V);

  // Soft ambient + diffuse shading
  float diff = max(dot(N, L), 0.0);
  float ambient = 0.30;

  // Glossy poured paint highlight (high-specular sheen)
  float spec = pow(max(dot(N, H), 0.0), 38.0);
  vec3 specColor = vec3(1.0, 0.98, 0.92) * spec * 0.92;

  // Fresnel rim lighting for depth & volume
  float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.8);
  vec3 rimColor = mix(uColor1, uColor2, 0.5) * fresnel * 0.52;

  gl_FragColor = vec4(baseColor * (diff * 0.80 + ambient) + specColor + rimColor, 1.0);
}
`;

export interface PaletteConfig {
  name: string;
  color1: string; // Primary cobalt/blue
  color2: string; // Warm caramel/gold
  color3: string; // Midnight slate
  color4: string; // Sand/cream highlight
  color5: string; // Dark espresso
}

export const PALETTES: Record<string, PaletteConfig> = {
  lowtide: {
    name: "Lowtide (Banded Blue & Gold)",
    color1: "#2554d7", // Cobalt Blue
    color2: "#d99738", // Caramel Gold
    color3: "#0b1222", // Midnight Navy
    color4: "#edd8b4", // Warm Sand
    color5: "#17120e", // Dark Espresso
  },
  cyber: {
    name: "Sovereign Cyber",
    color1: "#06b6d4", // Cyan
    color2: "#8b5cf6", // Purple
    color3: "#020617", // Dark Slate
    color4: "#e2e8f0", // Silver
    color5: "#0f172a", // Deep Navy
  },
  ember: {
    name: "Volcanic Amber",
    color1: "#ea580c", // Deep Orange
    color2: "#f59e0b", // Amber
    color3: "#180c06", // Dark Carbon
    color4: "#fde68a", // Pale Gold
    color5: "#431407", // Dark Rust
  },
  emerald: {
    name: "Tactical Jade",
    color1: "#059669", // Emerald
    color2: "#10b981", // Mint
    color3: "#022c22", // Deep Pine
    color4: "#d1fae5", // Sage Cream
    color5: "#064e3b", // Forest Green
  }
};

interface NoiseBlobsCanvasProps {
  paletteKey?: string;
  onStirFactorChange?: (factor: number) => void;
  interactive?: boolean;
}

export default function NoiseBlobsCanvas({
  paletteKey = "lowtide",
  onStirFactorChange,
  interactive = true,
}: NoiseBlobsCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Speed and pointer interaction refs
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, speed: 0.4, targetSpeed: 0.4 });
  const lastMousePos = useRef({ x: 0, y: 0, time: performance.now() });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Palette Colors
    const palette = PALETTES[paletteKey] || PALETTES.lowtide;
    const c1 = new THREE.Color(palette.color1);
    const c2 = new THREE.Color(palette.color2);
    const c3 = new THREE.Color(palette.color3);
    const c4 = new THREE.Color(palette.color4);
    const c5 = new THREE.Color(palette.color5);

    // 3. Shared Uniforms Factory
    const createShaderMaterial = (bandScale = 2.4, displacement = 0.22, frequency = 1.1) => {
      return new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uSpeed: { value: 0.4 },
          uDisplacement: { value: displacement },
          uFrequency: { value: frequency },
          uBandScale: { value: bandScale },
          uLightPos: { value: new THREE.Vector3(4.5, 4.5, 6.0) },
          uColor1: { value: c1.clone() },
          uColor2: { value: c2.clone() },
          uColor3: { value: c3.clone() },
          uColor4: { value: c4.clone() },
          uColor5: { value: c5.clone() },
        },
      });
    };

    // 4. Create the 3 Blobs (Matching the screenshot layout!)
    // Blob 1: Large Main Blob on the right
    const geo1 = new THREE.IcosahedronGeometry(1.65, 48);
    const mat1 = createShaderMaterial(2.2, 0.24, 1.05);
    const blob1 = new THREE.Mesh(geo1, mat1);
    blob1.position.set(2.1, -0.05, 0.1);
    scene.add(blob1);

    // Blob 2: Small Floating Blob in lower-middle
    const geo2 = new THREE.IcosahedronGeometry(0.62, 36);
    const mat2 = createShaderMaterial(3.2, 0.18, 1.4);
    // Give blob 2 warm caramel emphasis (matching screenshot)
    mat2.uniforms.uColor1.value = new THREE.Color(palette.color2);
    mat2.uniforms.uColor2.value = new THREE.Color(palette.color4);
    mat2.uniforms.uColor4.value = new THREE.Color(palette.color5);
    const blob2 = new THREE.Mesh(geo2, mat2);
    blob2.position.set(-0.55, -1.55, 0.8);
    scene.add(blob2);

    // Blob 3: Accent Blob in upper-left corner
    const geo3 = new THREE.IcosahedronGeometry(1.15, 36);
    const mat3 = createShaderMaterial(2.6, 0.20, 1.2);
    const blob3 = new THREE.Mesh(geo3, mat3);
    blob3.position.set(-3.2, 1.9, -0.5);
    scene.add(blob3);

    // 5. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp speed and rotation based on pointer movement
      const m = mouseRef.current;
      m.speed += (m.targetSpeed - m.speed) * 0.06;
      m.x += (m.targetX - m.x) * 0.05;
      m.y += (m.targetY - m.y) * 0.05;

      // Decay stir speed gently back to 0.4
      m.targetSpeed = Math.max(0.4, m.targetSpeed - delta * 0.35);

      if (onStirFactorChange) {
        onStirFactorChange(Math.round((m.speed / 0.4) * 10) / 10);
      }

      // Update shader uniforms
      const activeSpeed = m.speed;
      [mat1, mat2, mat3].forEach((mat) => {
        mat.uniforms.uTime.value = elapsedTime;
        mat.uniforms.uSpeed.value = activeSpeed;
      });

      // Slowly spiral and tilt blobs, stirring faster under pointer
      blob1.rotation.y = elapsedTime * (0.22 * activeSpeed) + m.x * 0.35;
      blob1.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15 + m.y * 0.25;

      blob2.rotation.y = -elapsedTime * (0.35 * activeSpeed) + m.x * 0.5;
      blob2.rotation.z = Math.cos(elapsedTime * 0.4) * 0.2;
      blob2.position.y = -1.55 + Math.sin(elapsedTime * 0.8) * 0.08;

      blob3.rotation.y = elapsedTime * (0.18 * activeSpeed) - m.x * 0.2;
      blob3.rotation.x = Math.cos(elapsedTime * 0.25) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      // Adjust blob positions dynamically for smaller screens
      if (w < 768) {
        blob1.position.set(0.6, -0.6, -0.4);
        blob1.scale.set(0.85, 0.85, 0.85);
        blob2.position.set(-0.8, -1.8, 0.3);
        blob3.position.set(-1.8, 1.8, -1.2);
      } else {
        blob1.position.set(2.1, -0.05, 0.1);
        blob1.scale.set(1, 1, 1);
        blob2.position.set(-0.55, -1.55, 0.8);
        blob3.position.set(-3.2, 1.9, -0.5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      geo1.dispose();
      geo2.dispose();
      geo3.dispose();
      mat1.dispose();
      mat2.dispose();
      mat3.dispose();
      renderer.dispose();
    };
  }, [paletteKey]);

  // Pointer movement triggers stirring faster under pointer
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

    const now = performance.now();
    const dt = Math.max(1, now - lastMousePos.current.time);
    const dx = x - lastMousePos.current.x;
    const dy = y - lastMousePos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const velocity = (dist / dt) * 1000;

    mouseRef.current.targetX = x;
    mouseRef.current.targetY = y;
    // Stir factor accelerates up to 2.2x under active pointer movement
    mouseRef.current.targetSpeed = Math.min(2.2, 0.4 + velocity * 0.18);

    lastMousePos.current = { x, y, time: now };
  };

  const handlePointerLeave = () => {
    mouseRef.current.targetX = 0;
    mouseRef.current.targetY = 0;
    mouseRef.current.targetSpeed = 0.4;
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-auto select-none"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
