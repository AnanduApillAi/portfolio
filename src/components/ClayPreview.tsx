'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { ExpandIcon } from './ui/expand';
import { useRouter } from 'next/navigation';

// Simple rotating clay sphere for preview
const PreviewSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.SphereGeometry>(null);

  // Initialize vertex colors like the original
  React.useEffect(() => {
    if (geometryRef.current) {
      const geometry = geometryRef.current;
      const positions = geometry.attributes.position.array as Float32Array;
      
      // Initialize vertex colors with clay color - same as original
      const colors = new Float32Array(positions.length);
      for (let i = 0; i < colors.length; i += 3) {
        colors[i] = 0.8;     // R
        colors[i + 1] = 0.7; // G  
        colors[i + 2] = 0.6; // B (clay color)
      }
      
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Simple rotation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow position={[0, 0, 0]}>
      {/* Smaller sphere for better visibility */}
      <sphereGeometry ref={geometryRef} args={[1.5, 32, 16]} />
      <meshStandardMaterial
        vertexColors
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
};

// Ground plane matching original exactly
const PreviewGround: React.FC = () => {
  return (
    <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Wireframe grid plane - same as original */}
      <mesh>
        <planeGeometry args={[20, 15, 20, 15]} />
        <meshBasicMaterial 
          color="#666666" 
          transparent 
          opacity={0.15}
          wireframe={true}
        />
      </mesh>
      {/* Center lines - same as original */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[20, 0.05]} />
        <meshBasicMaterial color="#999999" transparent opacity={0.4} />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[0.05, 15]} />
        <meshBasicMaterial color="#999999" transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

const ClayPreview: React.FC = () => {
  const router = useRouter();

  const handleEnterPlayground = () => {
    // Store current scroll position with multiple fallbacks
    const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    sessionStorage.setItem('mainPageScrollPosition', currentScroll.toString());
    
    // Also store in localStorage as backup
    localStorage.setItem('mainPageScrollPosition', currentScroll.toString());
    
    // Store timestamp to avoid stale data
    sessionStorage.setItem('scrollPositionTimestamp', Date.now().toString());
    
    // Navigate to clay playground with scroll disabled
    router.push('/clay-playground', { scroll: false });
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
      {/* Expand Icon */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={handleEnterPlayground}
          className=" backdrop-blur-sm rounded-full p-2 transition-opacity duration-300 cursor-pointer"
        >
          <ExpandIcon size={16} className="text-white" />
        </button>
      </div>
      
      {/* Full Canvas Background */}
      <div className="aspect-square w-full relative">
        <Canvas shadows camera={{ position: [3, 3, 5], fov: 50 }} className="rounded-xl">
          {/* Simplified lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-5, 5, 5]} intensity={0.5} />
          
          <PreviewSphere />
          <PreviewGround />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={false}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Canvas>
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        
        {/* Overlay Text */}
        <div className="absolute inset-x-0 bottom-0 p-4 text-white z-10">
          <h3 className="text-lg font-semibold mb-1 drop-shadow-lg">3D Clay Playground</h3>
          <p className="text-sm text-white/90 drop-shadow-md">
            Expand to enter sculpting mode
          </p>
        </div>
        
        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none rounded-xl" />
      </div>
    </div>
  );
};

export default ClayPreview; 