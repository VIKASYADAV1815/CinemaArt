"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uHover;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    
    // Create a liquid ripple effect based on hover
    float distortion = sin(uv.y * 20.0 + uTime * 2.0) * 0.05 * uHover;
    float distortion2 = cos(uv.x * 20.0 + uTime * 2.0) * 0.05 * uHover;
    
    uv.x += distortion;
    uv.y += distortion2;

    // Add a slight brightness boost on hover
    vec4 tex = texture2D(uTexture, uv);
    vec3 color = tex.rgb + vec3(uHover * 0.1);
    
    gl_FragColor = vec4(color, tex.a);
  }
`;

function LiquidPlane({ imgUrl }: { imgUrl: string }) {
  const texture = useTexture(imgUrl);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const [hovered, setHover] = useState(false);

  // Calculate aspect ratio 
  const img = texture.image as any;
  const aspect = img ? img.width / img.height : 1;

  // Use useMemo to avoid recreating uniforms
  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uHover: { value: 0 },
      uTime: { value: 0 },
    }),
    [texture]
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uHover.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uHover.value,
        hovered ? 1 : 0,
        0.05
      );
    }
  });

  return (
    <mesh
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={[10 * aspect, 10, 1]}
    >
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function LiquidImage({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 w-full h-full cursor-pointer">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <LiquidPlane imgUrl={src} />
      </Canvas>
    </div>
  );
}