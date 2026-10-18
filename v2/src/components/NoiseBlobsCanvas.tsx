import React, { useEffect, useRef } from "react";
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
uniform float uDisplacement;
uniform float uFrequency;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying float vNoise;

void main() {
  vec3 norm = normalize(normal);
  
  // Continuous smooth dual-octave noise displacement
  float n1 = snoise(position * uFrequency + vec3(0.0, uTime * 0.35, 0.0));
  float n2 = snoise(position * (uFrequency * 2.1) + vec3(uTime * 0.45, 0.0, uTime * 0.25)) * 0.35;
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
uniform vec3 uLightPos1;
uniform vec3 uLightPos2;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying float vNoise;

// High-contrast, rich liquid-marble palette interpolation
vec3 samplePalette(float t) {
  t = fract(t);
  if (t < 0.22) return mix(uColor1, uColor3, t / 0.22);
  if (t < 0.44) return mix(uColor3, uColor2, (t - 0.22) / 0.22);
  if (t < 0.66) return mix(uColor2, uColor4, (t - 0.44) / 0.22);
  if (t < 0.85) return mix(uColor4, uColor5, (t - 0.66) / 0.19);
  return mix(uColor5, uColor1, (t - 0.85) / 0.15);
}

void main() {
  // Banded horizontal contour with smooth continuous evolution
  float bandCoord = (vPosition.y * uBandScale) + (vNoise * 1.5) + (vPosition.x * 0.22) + (uTime * 0.12);
  vec3 baseColor = samplePalette(bandCoord);

  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPosition);

  // Key Light (warm high-angle studio light)
  vec3 L1 = normalize(uLightPos1 - vWorldPosition);
  vec3 H1 = normalize(L1 + V);
  float diff1 = max(dot(N, L1), 0.0);
  float spec1 = pow(max(dot(N, H1), 0.0), 38.0);

  // Soft Secondary Fill Light
  vec3 L2 = normalize(uLightPos2 - vWorldPosition);
  float diff2 = max(dot(N, L2), 0.0);

  // Clean luminous ambient for light gradient theme
  float ambient = 0.46;

  // Ultra-glossy liquid poured-paint specular sheen
  vec3 specColor = vec3(1.0, 1.0, 1.0) * spec1 * 1.30;

  // Rim Fresnel highlight for clean separation on light background
  float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.5);
  vec3 rimColor = vec3(1.0, 1.0, 1.0) * fresnel * 0.50;

  vec3 finalColor = baseColor * (diff1 * 0.72 + diff2 * 0.28 + ambient) + specColor + rimColor;

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

interface NoiseBlobsCanvasProps {
  interactive?: boolean;
}

export default function NoiseBlobsCanvas({
  interactive = true,
}: NoiseBlobsCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Smooth lerping physics refs
  const mouseRef = useRef({
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    speed: 0.38,
    targetSpeed: 0.38
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. High-Fashion Liquid Marble Palette (Cobalt Blue, Warm Amber Gold, Deep Charcoal Navy, Sand Cream)
    const c1 = new THREE.Color("#1d4ed8"); // Rich Cobalt Blue
    const c2 = new THREE.Color("#d97706"); // Warm Honey Gold
    const c3 = new THREE.Color("#0f172a"); // Deep Slate Charcoal
    const c4 = new THREE.Color("#fed7aa"); // Warm Sand Cream
    const c5 = new THREE.Color("#1e1b4b"); // Midnight Indigo

    // 3. Shader Material Factory
    const createShaderMaterial = (bandScale = 2.4, displacement = 0.22, frequency = 1.1) => {
      return new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uDisplacement: { value: displacement },
          uFrequency: { value: frequency },
          uBandScale: { value: bandScale },
          uLightPos1: { value: new THREE.Vector3(6.0, 8.0, 7.0) },
          uLightPos2: { value: new THREE.Vector3(-6.0, 3.0, 5.0) },
          uColor1: { value: c1.clone() },
          uColor2: { value: c2.clone() },
          uColor3: { value: c3.clone() },
          uColor4: { value: c4.clone() },
          uColor5: { value: c5.clone() },
        },
      });
    };

    // 4. Create Beautiful Balanced Composition (Clean Dual-Blob Sculpture without Awkward Top Overlaps)
    // Blob 1: Large Main Blob on the right side
    const geo1 = new THREE.IcosahedronGeometry(1.55, 48);
    const mat1 = createShaderMaterial(2.2, 0.22, 1.05);
    const blob1 = new THREE.Mesh(geo1, mat1);
    scene.add(blob1);

    // Blob 2: Satellite Floating Blob in lower-center
    const geo2 = new THREE.IcosahedronGeometry(0.65, 36);
    const mat2 = createShaderMaterial(2.8, 0.17, 1.35);
    mat2.uniforms.uColor1.value = new THREE.Color("#d97706");
    mat2.uniforms.uColor2.value = new THREE.Color("#fbbf24");
    mat2.uniforms.uColor4.value = new THREE.Color("#fef3c7");
    const blob2 = new THREE.Mesh(geo2, mat2);
    scene.add(blob2);

    // Dynamic placement helper that fits the screen automatically
    const updatePositions = (w: number) => {
      if (w < 768) {
        blob1.position.set(0.0, -0.3, -0.4);
        blob1.scale.set(0.9, 0.9, 0.9);
        blob2.position.set(-0.6, -1.6, 0.3);
      } else if (w < 1200) {
        blob1.position.set(1.5, 0.05, 0.0);
        blob1.scale.set(1.0, 1.0, 1.0);
        blob2.position.set(0.1, -1.4, 0.5);
      } else {
        blob1.position.set(2.0, 0.05, 0.1);
        blob1.scale.set(1.15, 1.15, 1.15);
        blob2.position.set(0.35, -1.45, 0.6);
      }
    };

    updatePositions(width);

    // 5. Silky Smooth Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let accumulatedTime = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.08);

      const m = mouseRef.current;
      m.speed += (m.targetSpeed - m.speed) * (delta * 1.8);
      m.currentX += (m.targetX - m.currentX) * (delta * 2.5);
      m.currentY += (m.targetY - m.currentY) * (delta * 2.5);

      accumulatedTime += delta * m.speed;

      [mat1, mat2].forEach((mat) => {
        mat.uniforms.uTime.value = accumulatedTime;
      });

      // Smooth incremental rotation
      blob1.rotation.y += delta * (0.22 * m.speed);
      blob2.rotation.y -= delta * (0.28 * m.speed);

      // Smooth parallax tilt from mouse
      blob1.rotation.x = m.currentY * 0.28;
      blob1.rotation.z = -m.currentX * 0.15;

      blob2.position.y = (width < 768 ? -1.6 : -1.45) + Math.sin(accumulatedTime * 1.5) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Resize Handler (fits full screen automatically)
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      width = w;
      height = h;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      updatePositions(w);
    };

    window.addEventListener("resize", handleResize);

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      geo1.dispose();
      geo2.dispose();
      mat1.dispose();
      mat2.dispose();
      renderer.dispose();
    };
  }, []);

  // Smooth pointer interaction
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

    mouseRef.current.targetX = x;
    mouseRef.current.targetY = y;
    mouseRef.current.targetSpeed = 0.70;
  };

  const handlePointerLeave = () => {
    mouseRef.current.targetX = 0;
    mouseRef.current.targetY = 0;
    mouseRef.current.targetSpeed = 0.38;
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-auto select-none"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
