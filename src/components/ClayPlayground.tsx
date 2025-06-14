'use client';

import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { HexColorPicker } from 'react-colorful';
import { ExpandIcon } from './ui/expand';
import { useRouter } from 'next/navigation';

type SculptMode = 'drag' | 'flatten' | 'smooth' | 'crease' | 'paint' | 'inflate' | 'pinch' | 'grab' | 'clay' | 'layer' | 'scrape' | 'nudge';

interface ClayMeshProps {
  isFullscreen: boolean;
  mode: SculptMode;
  brushSize: number;
  brushStrength: number;
  paintColor: string;
  paintOpacity: number;
  onReset: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onInteractionChange: (isInteracting: boolean) => void;
}

const Scene: React.FC<ClayMeshProps> = ({ isFullscreen, mode, brushSize, brushStrength, paintColor, paintOpacity, onReset, onUndo, onRedo, onInteractionChange }) => {
  return (
    <>
      <ClayMesh 
        isFullscreen={isFullscreen}
        mode={mode}
        brushSize={brushSize}
        brushStrength={brushStrength}
        paintColor={paintColor}
        paintOpacity={paintOpacity}
        onReset={onReset}
        onUndo={onUndo}
        onRedo={onRedo}
        onInteractionChange={onInteractionChange}
      />
      <Ground />
    </>
  );
};

const Ground: React.FC = () => {
  return (
    <group position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Full rectangular grid plane */}
      <mesh>
        <planeGeometry args={[40, 30, 40, 30]} />
        <meshBasicMaterial 
          color="#666666" 
          transparent 
          opacity={0.15}
          wireframe={true}
        />
      </mesh>
      {/* Slightly more visible center lines */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[40, 0.05]} />
        <meshBasicMaterial color="#999999" transparent opacity={0.4} />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[0.05, 30]} />
        <meshBasicMaterial color="#999999" transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

const CursorIndicators: React.FC<{ 
  mainPosition: THREE.Vector3 | null; 
  mirrorPosition: THREE.Vector3 | null; 
  mainNormal: THREE.Vector3 | null;
  mirrorNormal: THREE.Vector3 | null;
  brushSize: number;
  isVisible: boolean;
}> = ({ mainPosition, mirrorPosition, mainNormal, mirrorNormal, brushSize, isVisible }) => {
  if (!isVisible || !mainPosition || !mainNormal) return null;

  // Calculate positions slightly outside the sphere surface
  const mainSurfacePos = mainPosition.clone().add(mainNormal.clone().multiplyScalar(0.1));
  const mirrorSurfacePos = mirrorPosition?.clone().add(mirrorNormal?.clone().multiplyScalar(0.1) || new THREE.Vector3());

  // Calculate rotation to align with surface normal
  const getRotationFromNormal = (normal: THREE.Vector3) => {
    const up = new THREE.Vector3(0, 0, 1);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(up, normal);
    return new THREE.Euler().setFromQuaternion(quaternion);
  };

  const mainRotation = getRotationFromNormal(mainNormal);
  const mirrorRotation = mirrorNormal ? getRotationFromNormal(mirrorNormal) : new THREE.Euler();

  return (
    <group>
      {/* Main cursor - 3D ring and center */}
      <group position={mainSurfacePos} rotation={mainRotation}>
        <mesh>
          <torusGeometry args={[brushSize, 0.02, 8, 32]} />
          <meshBasicMaterial color="#00ff00" transparent opacity={0.7} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#00ff00" transparent opacity={0.9} />
        </mesh>
      </group>
      
      {/* Mirror cursor - 3D ring and center */}
      {mirrorPosition && mirrorNormal && (
        <group position={mirrorSurfacePos} rotation={mirrorRotation}>
          <mesh>
            <torusGeometry args={[brushSize, 0.015, 8, 32]} />
            <meshBasicMaterial color="#ff6600" transparent opacity={0.5} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#ff6600" transparent opacity={0.8} />
          </mesh>
        </group>
      )}
    </group>
  );
};

const ClayMesh: React.FC<ClayMeshProps> = ({ isFullscreen, mode, brushSize, brushStrength, paintColor, paintOpacity, onReset, onUndo, onRedo, onInteractionChange }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.SphereGeometry>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const { camera, raycaster, pointer } = useThree();
  
  const [isDragging, setIsDragging] = useState(false);
  const [originalPositions, setOriginalPositions] = useState<Float32Array | null>(null);
  const [vertexColors, setVertexColors] = useState<Float32Array | null>(null);
  const [cursorPosition, setCursorPosition] = useState<THREE.Vector3 | null>(null);
  const [mirrorCursorPosition, setMirrorCursorPosition] = useState<THREE.Vector3 | null>(null);
  const [cursorNormal, setCursorNormal] = useState<THREE.Vector3 | null>(null);
  const [mirrorCursorNormal, setMirrorCursorNormal] = useState<THREE.Vector3 | null>(null);
  const [showCursors, setShowCursors] = useState(false);
  
  // History management for undo/redo
  const [history, setHistory] = useState<{positions: Float32Array, colors: Float32Array}[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Global pointer up listener to handle mouse release outside mesh
  useEffect(() => {
    const handleGlobalPointerUp = () => {
      if (isDragging) {
        setIsDragging(false);
        onInteractionChange(false);
      }
    };

    if (isFullscreen) {
      window.addEventListener('pointerup', handleGlobalPointerUp);
      window.addEventListener('mouseup', handleGlobalPointerUp);
      
      return () => {
        window.removeEventListener('pointerup', handleGlobalPointerUp);
        window.removeEventListener('mouseup', handleGlobalPointerUp);
      };
    }
  }, [isDragging, isFullscreen, onInteractionChange]);

  // Ensure cursor tracking starts when entering fullscreen
  useEffect(() => {
    if (isFullscreen) {
      setShowCursors(true);
    } else {
      setShowCursors(false);
      setCursorPosition(null);
      setMirrorCursorPosition(null);
      setCursorNormal(null);
      setMirrorCursorNormal(null);
    }
  }, [isFullscreen]);

  // Initialize geometry and colors
  useEffect(() => {
    if (geometryRef.current && !originalPositions) {
      const geometry = geometryRef.current;
      const positions = geometry.attributes.position.array as Float32Array;
      setOriginalPositions(new Float32Array(positions));
      
      // Initialize vertex colors
      const colors = new Float32Array(positions.length);
      for (let i = 0; i < colors.length; i += 3) {
        colors[i] = 0.8;     // R
        colors[i + 1] = 0.7; // G  
        colors[i + 2] = 0.6; // B (clay color)
      }
      setVertexColors(colors);
      
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      if (materialRef.current) {
        materialRef.current.vertexColors = true;
      }
      
      // Initialize history with the starting state
      setHistory([{
        positions: new Float32Array(positions),
        colors: new Float32Array(colors)
      }]);
      setHistoryIndex(0);
    }
  }, [originalPositions]);

  // Reset function
  useEffect(() => {
    const handleReset = () => {
      if (geometryRef.current && originalPositions && vertexColors) {
        const geometry = geometryRef.current;
        const positions = geometry.attributes.position.array as Float32Array;
        
        // Reset positions
        for (let i = 0; i < positions.length; i++) {
          positions[i] = originalPositions[i];
        }
        
        // Reset colors
        const colors = geometry.attributes.color.array as Float32Array;
        for (let i = 0; i < colors.length; i += 3) {
          colors[i] = 0.8;     // R
          colors[i + 1] = 0.7; // G
          colors[i + 2] = 0.6; // B
        }
        
        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true;
        geometry.computeVertexNormals();
        
        // Reset history to initial state
        if (originalPositions && vertexColors) {
          setHistory([{
            positions: new Float32Array(originalPositions),
            colors: new Float32Array(vertexColors)
          }]);
          setHistoryIndex(0);
        }
      }
    };

         // This is a bit hacky, but we need to expose the reset function
     (window as any).clayReset = handleReset;
  }, [originalPositions, vertexColors, onReset]);

  // Save current state to history
  const saveToHistory = useCallback(() => {
    if (!geometryRef.current) return;
    
    const geometry = geometryRef.current;
    const positions = geometry.attributes.position.array as Float32Array;
    const colors = geometry.attributes.color.array as Float32Array;
    
    const newState = {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors)
    };
    
    // Remove any history after current index (when we make a new change after undoing)
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newState);
    
    // Limit history to 20 states to prevent memory issues
    if (newHistory.length > 20) {
      newHistory.shift();
    } else {
      setHistoryIndex(historyIndex + 1);
    }
    
    setHistory(newHistory);
  }, [history, historyIndex]);

  // Undo function
  const handleUndo = useCallback(() => {
    if (historyIndex > 0 && geometryRef.current) {
      const newIndex = historyIndex - 1;
      const state = history[newIndex];
      
      const geometry = geometryRef.current;
      const positions = geometry.attributes.position.array as Float32Array;
      const colors = geometry.attributes.color.array as Float32Array;
      
      // Restore positions and colors
      for (let i = 0; i < positions.length; i++) {
        positions[i] = state.positions[i];
        colors[i] = state.colors[i];
      }
      
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;
      geometry.computeVertexNormals();
      
      setHistoryIndex(newIndex);
    }
  }, [history, historyIndex]);

  // Redo function
  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1 && geometryRef.current) {
      const newIndex = historyIndex + 1;
      const state = history[newIndex];
      
      const geometry = geometryRef.current;
      const positions = geometry.attributes.position.array as Float32Array;
      const colors = geometry.attributes.color.array as Float32Array;
      
      // Restore positions and colors
      for (let i = 0; i < positions.length; i++) {
        positions[i] = state.positions[i];
        colors[i] = state.colors[i];
      }
      
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;
      geometry.computeVertexNormals();
      
      setHistoryIndex(newIndex);
    }
  }, [history, historyIndex]);

  // Expose undo/redo functions
  useEffect(() => {
    (window as any).clayUndo = handleUndo;
    (window as any).clayRedo = handleRedo;
  }, [handleUndo, handleRedo]);

  const applyBrushEffect = useCallback((intersectionPoint: THREE.Vector3) => {
    if (!geometryRef.current || !meshRef.current) return;

    const geometry = geometryRef.current;
    const positions = geometry.attributes.position.array as Float32Array;
    const colors = geometry.attributes.color.array as Float32Array;
    const mesh = meshRef.current;

    // Convert world position to local position
    const localPoint = mesh.worldToLocal(intersectionPoint.clone());
    const mirrorLocalPoint = new THREE.Vector3(-localPoint.x, localPoint.y, localPoint.z);
    
    // For smooth mode, we need to calculate average positions
    const smoothingData: { [key: number]: THREE.Vector3 } = {};
    
    for (let i = 0; i < positions.length; i += 3) {
      const vertex = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]);
      
      // Check distance to main point
      const mainDistance = vertex.distanceTo(localPoint);
      // Check distance to mirror point
      const mirrorDistance = vertex.distanceTo(mirrorLocalPoint);
      
      if (mainDistance < brushSize || mirrorDistance < brushSize) {
        const useMain = mainDistance < brushSize;
        const distance = useMain ? mainDistance : mirrorDistance;
        const influence = Math.max(0, 1 - distance / brushSize);
        const baseStrength = influence * brushStrength;
        
        switch (mode) {
          case 'drag':
            // Push outward from center
            const direction = vertex.clone().normalize();
            const displacement = direction.multiplyScalar(baseStrength * 0.15);
            positions[i] += displacement.x;
            positions[i + 1] += displacement.y;
            positions[i + 2] += displacement.z;
            break;
            
          case 'flatten':
            // Flatten towards the brush center plane
            const brushCenter = useMain ? localPoint : mirrorLocalPoint;
            const toBrush = brushCenter.clone().sub(vertex);
            const flattenAmount = toBrush.length() * baseStrength * 0.3;
            const flattenDir = toBrush.normalize().multiplyScalar(flattenAmount);
            positions[i] += flattenDir.x;
            positions[i + 1] += flattenDir.y;
            positions[i + 2] += flattenDir.z;
            break;
            
          case 'smooth':
            // Store for smoothing calculation
            smoothingData[i] = vertex.clone();
            break;
            
          case 'crease':
            // Create sharp creases by pushing inward
            const creaseDirection = vertex.clone().normalize();
            const creaseDisplacement = creaseDirection.multiplyScalar(-baseStrength * 0.2);
            positions[i] += creaseDisplacement.x;
            positions[i + 1] += creaseDisplacement.y;
            positions[i + 2] += creaseDisplacement.z;
            break;
            
          case 'inflate':
            // Inflate along vertex normal (outward)
            const inflateDirection = vertex.clone().normalize();
            const inflateDisplacement = inflateDirection.multiplyScalar(baseStrength * 0.12);
            positions[i] += inflateDisplacement.x;
            positions[i + 1] += inflateDisplacement.y;
            positions[i + 2] += inflateDisplacement.z;
            break;
            
          case 'pinch':
            // Pull vertices toward brush center
            const pinchCenter = useMain ? localPoint : mirrorLocalPoint;
            const toPinchCenter = pinchCenter.clone().sub(vertex);
            const pinchAmount = toPinchCenter.length() * baseStrength * 0.25;
            const pinchDir = toPinchCenter.normalize().multiplyScalar(pinchAmount);
            positions[i] += pinchDir.x;
            positions[i + 1] += pinchDir.y;
            positions[i + 2] += pinchDir.z;
            break;
            
          case 'grab':
            // Move vertices with the brush (elastic deformation)
            const grabCenter = useMain ? localPoint : mirrorLocalPoint;
            const toGrabCenter = grabCenter.clone().sub(vertex);
            const grabAmount = Math.min(toGrabCenter.length(), brushSize * 0.5) * baseStrength * 0.4;
            const grabDir = toGrabCenter.normalize().multiplyScalar(grabAmount);
            positions[i] += grabDir.x;
            positions[i + 1] += grabDir.y;
            positions[i + 2] += grabDir.z;
            break;
            
          case 'clay':
            // Clay buildup - adds volume like real clay
            const clayDirection = vertex.clone().normalize();
            const clayDisplacement = clayDirection.multiplyScalar(baseStrength * 0.18);
            // Add some flattening effect for more realistic clay behavior
            const clayCenter = useMain ? localPoint : mirrorLocalPoint;
            const toClay = clayCenter.clone().sub(vertex);
            const clayFlatten = toClay.multiplyScalar(baseStrength * 0.05);
            positions[i] += clayDisplacement.x + clayFlatten.x;
            positions[i + 1] += clayDisplacement.y + clayFlatten.y;
            positions[i + 2] += clayDisplacement.z + clayFlatten.z;
            break;
            
          case 'layer':
            // Layer brush - builds up to a maximum height
            const layerDirection = vertex.clone().normalize();
            const currentDistance = vertex.length();
            const targetDistance = 2.2; // Slightly larger than sphere radius
            if (currentDistance < targetDistance) {
              const layerAmount = Math.min(targetDistance - currentDistance, baseStrength * 0.1);
              const layerDisplacement = layerDirection.multiplyScalar(layerAmount);
              positions[i] += layerDisplacement.x;
              positions[i + 1] += layerDisplacement.y;
              positions[i + 2] += layerDisplacement.z;
            }
            break;
            
          case 'scrape':
            // Scrape - cuts into the surface
            const scrapeDirection = vertex.clone().normalize();
            const scrapeDisplacement = scrapeDirection.multiplyScalar(-baseStrength * 0.15);
            positions[i] += scrapeDisplacement.x;
            positions[i + 1] += scrapeDisplacement.y;
            positions[i + 2] += scrapeDisplacement.z;
            break;
            
          case 'nudge':
            // Nudge - moves vertices along the surface
            const nudgeCenter = useMain ? localPoint : mirrorLocalPoint;
            const toNudge = nudgeCenter.clone().sub(vertex);
            // Project movement onto surface tangent
            const normal = vertex.clone().normalize();
            const tangent = toNudge.clone().sub(normal.clone().multiplyScalar(toNudge.dot(normal)));
            const nudgeAmount = tangent.length() * baseStrength * 0.2;
            const nudgeDir = tangent.normalize().multiplyScalar(nudgeAmount);
            positions[i] += nudgeDir.x;
            positions[i + 1] += nudgeDir.y;
            positions[i + 2] += nudgeDir.z;
            break;
            
          case 'paint':
            // Apply color with opacity control
            const color = new THREE.Color(paintColor);
            const paintStrength = influence * paintOpacity;
            colors[i] = THREE.MathUtils.lerp(colors[i], color.r, paintStrength);
            colors[i + 1] = THREE.MathUtils.lerp(colors[i + 1], color.g, paintStrength);
            colors[i + 2] = THREE.MathUtils.lerp(colors[i + 2], color.b, paintStrength);
            break;
        }
      }
    }
    
    // Handle smoothing separately
    if (mode === 'smooth' && Object.keys(smoothingData).length > 0) {
      for (const indexStr in smoothingData) {
        const i = parseInt(indexStr);
        const vertex = smoothingData[i];
        
        // Find neighboring vertices for averaging
        const neighbors: THREE.Vector3[] = [];
        for (let j = 0; j < positions.length; j += 3) {
          if (j === i) continue;
          const neighbor = new THREE.Vector3(positions[j], positions[j + 1], positions[j + 2]);
          if (vertex.distanceTo(neighbor) < 0.3) { // Adjust neighbor distance as needed
            neighbors.push(neighbor);
          }
        }
        
        if (neighbors.length > 0) {
          // Calculate average position
          const avgPos = neighbors.reduce((sum, pos) => sum.add(pos), new THREE.Vector3()).divideScalar(neighbors.length);
          const influence = Math.max(0, 1 - vertex.distanceTo(localPoint) / brushSize);
          const smoothStrength = influence * brushStrength * 0.3;
          
          // Blend towards average
          positions[i] = THREE.MathUtils.lerp(positions[i], avgPos.x, smoothStrength);
          positions[i + 1] = THREE.MathUtils.lerp(positions[i + 1], avgPos.y, smoothStrength);
          positions[i + 2] = THREE.MathUtils.lerp(positions[i + 2], avgPos.z, smoothStrength);
        }
      }
    }

    geometry.attributes.position.needsUpdate = true;
    if (mode === 'paint') {
      geometry.attributes.color.needsUpdate = true;
    } else {
      geometry.computeVertexNormals();
    }
  }, [brushSize, brushStrength, paintColor, paintOpacity, mode]);

  const findMirrorVertex = (vertexIndex: number, positions: Float32Array): number => {
    const x = positions[vertexIndex];
    const y = positions[vertexIndex + 1];
    const z = positions[vertexIndex + 2];
    
    // Find vertex with mirrored X coordinate
    for (let i = 0; i < positions.length; i += 3) {
      if (i === vertexIndex) continue;
      
      const mirrorX = positions[i];
      const mirrorY = positions[i + 1];
      const mirrorZ = positions[i + 2];
      
      if (Math.abs(mirrorX + x) < 0.01 && 
          Math.abs(mirrorY - y) < 0.01 && 
          Math.abs(mirrorZ - z) < 0.01) {
        return i;
      }
    }
    return -1;
  };

  const calculateMirrorPosition = (position: THREE.Vector3): THREE.Vector3 => {
    return new THREE.Vector3(-position.x, position.y, position.z);
  };

  const updateCursorPosition = useCallback(() => {
    if (!meshRef.current) return;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(meshRef.current);
    
    if (intersects.length > 0) {
      const intersectionPoint = intersects[0].point;
      const normal = intersects[0].face?.normal.clone() || new THREE.Vector3(0, 1, 0);
      
      // Transform normal to world space
      const worldNormal = normal.transformDirection(meshRef.current.matrixWorld).normalize();
      
      setCursorPosition(intersectionPoint.clone());
      setCursorNormal(worldNormal);
      
      const mirrorPos = calculateMirrorPosition(intersectionPoint);
      const mirrorNormal = new THREE.Vector3(-worldNormal.x, worldNormal.y, worldNormal.z);
      
      setMirrorCursorPosition(mirrorPos);
      setMirrorCursorNormal(mirrorNormal);
    } else {
      setCursorPosition(null);
      setMirrorCursorPosition(null);
      setCursorNormal(null);
      setMirrorCursorNormal(null);
    }
  }, [camera, raycaster, pointer]);

  const handlePointerDown = (event: THREE.Event) => {
    if (!isFullscreen) return;
    setIsDragging(true);
    setShowCursors(true);
    onInteractionChange(true);
    handleInteraction(event);
  };

  const handlePointerMove = (event: THREE.Event) => {
    if (!isFullscreen) return;
    
    // Always update cursor position when hovering over mesh in fullscreen
    updateCursorPosition();
    
    if (isDragging) {
      handleInteraction(event);
    }
  };

  const handlePointerUp = useCallback(() => {
    if (isDragging) {
      saveToHistory(); // Save state after sculpting action
    }
    setIsDragging(false);
    onInteractionChange(false);
    // Don't clear cursor position or hide cursors here - let hover state handle visibility
  }, [isDragging, saveToHistory, onInteractionChange]);

  const handlePointerEnter = () => {
    if (isFullscreen) {
      setShowCursors(true);
      updateCursorPosition();
    }
  };

  const handlePointerLeave = () => {
    setShowCursors(false);
    setCursorPosition(null);
    setMirrorCursorPosition(null);
    setCursorNormal(null);
    setMirrorCursorNormal(null);
  };

  const handleInteraction = (event: THREE.Event) => {
    if (!meshRef.current) return;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(meshRef.current);
    
    if (intersects.length > 0) {
      const intersectionPoint = intersects[0].point;
      applyBrushEffect(intersectionPoint);
    }
  };

  return (
    <>
      <mesh
        ref={meshRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        castShadow
        receiveShadow
        position={[0, 0, 0]}
      >
        <sphereGeometry ref={geometryRef} args={[2, 80, 40]} />
        <meshStandardMaterial
          ref={materialRef}
          vertexColors
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      
      <CursorIndicators
        mainPosition={cursorPosition}
        mirrorPosition={mirrorCursorPosition}
        mainNormal={cursorNormal}
        mirrorNormal={mirrorCursorNormal}
        brushSize={brushSize}
        isVisible={showCursors && isFullscreen}
      />
    </>
  );
};

const ClayPlayground: React.FC = () => {
  const router = useRouter();
  const [isFullscreen, setIsFullscreen] = useState(true);
  const [mode, setMode] = useState<SculptMode>('clay');
  const [brushSize, setBrushSize] = useState(0.4);
  const [brushStrength, setBrushStrength] = useState(0.8);
  const [paintColor, setPaintColor] = useState('#ff6b6b');
  const [paintOpacity, setPaintOpacity] = useState(0.3);
  const [isInteracting, setIsInteracting] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleClose = () => {
    // Navigate back to main page with scroll disabled
    // The global ScrollRestoration component will handle the actual restoration
    router.replace('/', { scroll: false });
  };

  const handleReset = () => {
    if ((window as any).clayReset) {
      (window as any).clayReset();
    }
  };

  const handleUndo = () => {
    if ((window as any).clayUndo) {
      (window as any).clayUndo();
    }
  };

  const handleRedo = () => {
    if ((window as any).clayRedo) {
      (window as any).clayRedo();
    }
  };

  return (
    <AnimatePresence>
      {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex flex-col"
          >
                        {/* Top Bar - Exit */}
            <div className="absolute top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 flex justify-between items-center z-20">
              <div className="text-white/90 text-xs md:text-sm font-medium bg-black/20 backdrop-blur-sm px-2 md:px-3 py-1.5 md:py-2 rounded-lg border border-white/10">
                <span className="hidden sm:inline">3D Clay Playground</span>
                <span className="sm:hidden">Clay</span>
              </div>
              <button
                onClick={handleClose}
                className="bg-white/20 hover:bg-white/30 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-base md:text-lg font-bold transition-all duration-200 backdrop-blur-sm border border-white/30 shadow-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Mobile Bottom Panel */}
            <div className="md:hidden absolute bottom-4 left-2 right-2 bg-black/20 backdrop-blur-xl rounded-xl border border-white/10 p-3 z-10 max-h-[40vh] overflow-y-auto">
              <div className="space-y-4">
                {/* Mobile Tool Selection - Horizontal Scroll */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-semibold text-sm">Tools</h3>
                    {/* History Controls - Right Side of Tools Header */}
                    <div className="flex space-x-1">
                      <button
                        onClick={handleUndo}
                        className="bg-white/10 hover:bg-white/20 text-white w-6 h-6 rounded text-xs font-medium transition-all duration-200 border border-white/10 flex items-center justify-center"
                      >
                        ↶
                      </button>
                      <button
                        onClick={handleRedo}
                        className="bg-white/10 hover:bg-white/20 text-white w-6 h-6 rounded text-xs font-medium transition-all duration-200 border border-white/10 flex items-center justify-center"
                      >
                        ↷
                      </button>
                      <button
                        onClick={handleReset}
                        className="bg-red-500/90 hover:bg-red-500 text-white w-6 h-6 rounded text-xs font-medium transition-all duration-200 flex items-center justify-center"
                      >
                        ⟲
                      </button>
                    </div>
                  </div>
                  <div className="flex space-x-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin' }}>
                    {[
                      { mode: 'drag', icon: '↗', label: 'Drag' },
                      { mode: 'clay', icon: '🏺', label: 'Clay' },
                      { mode: 'flatten', icon: '▢', label: 'Flatten' },
                      { mode: 'smooth', icon: '◐', label: 'Smooth' },
                      { mode: 'inflate', icon: '🎈', label: 'Inflate' },
                      { mode: 'pinch', icon: '🤏', label: 'Pinch' },
                      { mode: 'grab', icon: '✋', label: 'Grab' },
                      { mode: 'crease', icon: '⌄', label: 'Crease' },
                      { mode: 'layer', icon: '📚', label: 'Layer' },
                      { mode: 'scrape', icon: '🔪', label: 'Scrape' },
                      { mode: 'nudge', icon: '👋', label: 'Nudge' },
                      { mode: 'paint', icon: '🎨', label: 'Paint' }
                    ].map((tool) => (
                      <button
                        key={tool.mode}
                        onClick={() => setMode(tool.mode as SculptMode)}
                        className={`flex-shrink-0 w-12 h-12 rounded-lg border transition-all duration-200 flex flex-col items-center justify-center p-1 ${
                          mode === tool.mode
                            ? 'bg-blue-500/90 border-blue-400/50 text-white shadow-lg shadow-blue-500/25'
                            : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        <span className="text-xs">{tool.icon}</span>
                        <span className="text-xs mt-0.5 leading-tight">{tool.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Brush Controls */}
                <div className="flex space-x-3">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white/80 text-xs">Size</span>
                      <span className="text-white text-xs font-mono">{brushSize.toFixed(1)}</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="1.2"
                      step="0.05"
                      value={brushSize}
                      onChange={(e) => setBrushSize(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white/80 text-xs">Strength</span>
                      <span className="text-white text-xs font-mono">{Math.round(brushStrength * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="2.0"
                      step="0.1"
                      value={brushStrength}
                      onChange={(e) => setBrushStrength(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>

                {/* Mobile Paint Settings */}
                {mode === 'paint' && (
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-white/80 text-xs">Color</span>
                      <button
                        onClick={() => setShowColorPicker(true)}
                        className="w-6 h-6 rounded border border-white/20 cursor-pointer hover:border-white/40 transition-colors"
                        style={{ backgroundColor: paintColor }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white/80 text-xs">Opacity</span>
                        <span className="text-white text-xs font-mono">{Math.round(paintOpacity * 100)}%</span>
                      </div>
                      <input
                        type="range"
                        min="0.1"
                        max="1"
                        step="0.1"
                        value={paintOpacity}
                        onChange={(e) => setPaintOpacity(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Right Panel */}
            <div className="hidden md:block absolute top-20 right-4 bottom-4 w-80 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 p-6 z-10 overflow-y-auto">
                              <div className="h-full flex flex-col space-y-6">
                
                {/* Tool Selection */}
                <div className="space-y-3">
                  <h3 className="text-white font-semibold text-lg">Tools</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { mode: 'drag', icon: '↗', label: 'Drag' },
                      { mode: 'clay', icon: '🏺', label: 'Clay' },
                      { mode: 'flatten', icon: '▢', label: 'Flatten' },
                      { mode: 'smooth', icon: '◐', label: 'Smooth' },
                      { mode: 'inflate', icon: '🎈', label: 'Inflate' },
                      { mode: 'pinch', icon: '🤏', label: 'Pinch' },
                      { mode: 'grab', icon: '✋', label: 'Grab' },
                      { mode: 'crease', icon: '⌄', label: 'Crease' },
                      { mode: 'layer', icon: '📚', label: 'Layer' },
                      { mode: 'scrape', icon: '🔪', label: 'Scrape' },
                      { mode: 'nudge', icon: '👋', label: 'Nudge' },
                      { mode: 'paint', icon: '🎨', label: 'Paint' }
                    ].map((tool) => (
                      <button
                        key={tool.mode}
                        onClick={() => setMode(tool.mode as SculptMode)}
                        className={`aspect-square rounded-xl border transition-all duration-200 flex flex-col items-center justify-center p-2 text-xs ${
                          mode === tool.mode
                            ? 'bg-blue-500/90 border-blue-400/50 text-white shadow-lg shadow-blue-500/25'
                            : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        <span className="text-sm">{tool.icon}</span>
                        <span className="text-xs mt-1 leading-tight">{tool.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* History Controls */}
                <div className="space-y-3">
                  <h3 className="text-white font-semibold text-lg">History</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleUndo}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-white/10"
                    >
                      ↶ Undo
                    </button>
                    <button
                      onClick={handleRedo}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-white/10"
                    >
                      ↷ Redo
                    </button>
                    <button
                      onClick={handleReset}
                      className="flex-1 bg-red-500/90 hover:bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                {/* Brush Settings */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg">Brush</h3>
                  
                  {/* Brush Size */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm">Size</span>
                      <span className="text-white text-sm font-mono">{brushSize.toFixed(1)}</span>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min="0.1"
                        max="1.2"
                        step="0.05"
                        value={brushSize}
                        onChange={(e) => setBrushSize(parseFloat(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                  
                  {/* Brush Strength */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm">Strength</span>
                      <span className="text-white text-sm font-mono">{Math.round(brushStrength * 100)}%</span>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min="0.1"
                        max="2.0"
                        step="0.1"
                        value={brushStrength}
                        onChange={(e) => setBrushStrength(parseFloat(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                </div>

                {/* Paint Settings */}
                {mode === 'paint' && (
                  <div className="space-y-4">
                    <h3 className="text-white font-semibold text-lg">Paint</h3>
                    
                    {/* Color Picker */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 text-sm">Color</span>
                        <div
                          className="w-8 h-8 rounded-lg border-2 border-white/20 cursor-pointer shadow-lg"
                          style={{ backgroundColor: paintColor }}
                        />
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                        <HexColorPicker color={paintColor} onChange={setPaintColor} />
                      </div>
                    </div>
                    
                    {/* Paint Opacity */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 text-sm">Opacity</span>
                        <span className="text-white text-sm font-mono">{Math.round(paintOpacity * 100)}%</span>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min="0.1"
                          max="1"
                          step="0.1"
                          value={paintOpacity}
                          onChange={(e) => setPaintOpacity(parseFloat(e.target.value))}
                          className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Tool Tips */}
                <div className="mt-auto space-y-2">
                  <div className="text-white/60 text-xs space-y-1">
                    <p><span className="font-medium">Click & Drag:</span> Apply tool effect</p>
                    <p><span className="font-medium">Mouse Wheel:</span> Rotate view</p>
                    <p><span className="font-medium">Right Click:</span> Pan view</p>
                    <div className="mt-2 pt-2 border-t border-white/10">
                      <p className="text-white/40 text-xs">
                        {mode === 'clay' && 'Clay: Builds volume like real clay'}
                        {mode === 'inflate' && 'Inflate: Expands surface outward'}
                        {mode === 'pinch' && 'Pinch: Pulls vertices together'}
                        {mode === 'grab' && 'Grab: Elastic deformation tool'}
                        {mode === 'layer' && 'Layer: Builds to maximum height'}
                        {mode === 'scrape' && 'Scrape: Cuts into surface'}
                        {mode === 'nudge' && 'Nudge: Moves along surface'}
                        {mode === 'drag' && 'Drag: Standard sculpting brush'}
                        {mode === 'flatten' && 'Flatten: Creates flat surfaces'}
                        {mode === 'smooth' && 'Smooth: Averages vertex positions'}
                        {mode === 'crease' && 'Crease: Creates sharp indentations'}
                        {mode === 'paint' && 'Paint: Applies color to surface'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                         {/* 3D Canvas */}
             <div className="flex-1">
               <Canvas shadows>
                 <PerspectiveCamera makeDefault position={[4, 4, 6]} />
                 <ambientLight intensity={1.0} />
                 <directionalLight 
                   position={[0, 10, 0]} 
                   intensity={1}
                   castShadow
                   shadow-mapSize-width={2048}
                   shadow-mapSize-height={2048}
                   shadow-camera-far={50}
                   shadow-camera-left={-10}
                   shadow-camera-right={10}
                   shadow-camera-top={10}
                   shadow-camera-bottom={-10}
                 />
                 <pointLight position={[8, 6, 8]} intensity={0.5} />
                 <pointLight position={[-8, 6, 8]} intensity={0.5} />
                 <pointLight position={[8, 6, -8]} intensity={0.5} />
                 <pointLight position={[-8, 6, -8]} intensity={0.5} />
                 <pointLight position={[0, 3, 8]} intensity={0.3} />
                 <pointLight position={[0, 3, -8]} intensity={0.3} />
                 <pointLight position={[0, -4, 0]} intensity={2.0} />
                 <pointLight position={[4, -3, 4]} intensity={1.0} />
                 <pointLight position={[-4, -3, 4]} intensity={1.0} />
                 <pointLight position={[4, -3, -4]} intensity={1.0} />
                 <pointLight position={[-4, -3, -4]} intensity={1.0} />
                 <pointLight position={[0, -2, 6]} intensity={0.8} />
                 <pointLight position={[0, -2, -6]} intensity={0.8} />
                 <Scene
                   isFullscreen={isFullscreen}
                   mode={mode}
                   brushSize={brushSize}
                   brushStrength={brushStrength}
                   paintColor={paintColor}
                   paintOpacity={paintOpacity}
                   onReset={handleReset}
                   onUndo={handleUndo}
                   onRedo={handleRedo}
                   onInteractionChange={setIsInteracting}
                 />
                 <OrbitControls enabled={!isInteracting} />
               </Canvas>
             </div>

            {/* Mobile Color Picker Modal */}
            <AnimatePresence>
              {showColorPicker && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-30 p-4"
                  onClick={() => setShowColorPicker(false)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-black/80 backdrop-blur-xl rounded-2xl border border-white/20 p-6 max-w-sm w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-semibold text-lg">Choose Color</h3>
                      <button
                        onClick={() => setShowColorPicker(false)}
                        className="text-white/60 hover:text-white text-xl"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <HexColorPicker color={paintColor} onChange={setPaintColor} />
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => setShowColorPicker(false)}
                        className="bg-blue-500/90 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        Done
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
    </AnimatePresence>
  );
};

export default ClayPlayground; 