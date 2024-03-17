import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { ARImageTracker, ARPerspectiveCamera, ARView } from 'three-graphics/ARUtils';

const ARPlayground = () => {
  const containerRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const arViewRef = useRef(null);
  const arImageTrackerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new ARPerspectiveCamera();
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    const arView = new ARView();
    arViewRef.current = arView;

    const arImageTracker = new ARImageTracker();
    arImageTrackerRef.current = arImageTracker;

    scene.add(camera);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, -0.5); // Adjust position to be in front of the camera
    scene.add(cube);

    arImageTracker.load('./path/to/image.jpg').then(() => {
      arImageTracker.onTrack = () => {
        console.log('Tracking!');

    };
    });

    const animate = () => {
      renderer.render(scene, camera);
      arView.render();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeChild(renderer.domElement);
      arView.dispose();
      arImageTracker.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ARPlayground;
