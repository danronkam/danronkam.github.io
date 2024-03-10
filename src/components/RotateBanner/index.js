import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RotatingObject = () => {
  const containerRef = useRef(null);
  const scene = useRef(null);
  const camera = useRef(null);
  const renderer = useRef(null);
  const object = useRef(null);

  useEffect(() => {
    scene.current = new THREE.Scene();

    camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.current.position.z = 5;

    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.current.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    object.current = new THREE.Mesh(geometry, material);
    scene.current.add(object.current);

    const handleResize = () => {
      camera.current.aspect = window.innerWidth / window.innerHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      object.current.rotation.x += 0.01;
      object.current.rotation.y += 0.01;
      renderer.current.render(scene.current, camera.current);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current.removeChild(renderer.current.domElement);
    };
  }, []);

  const handleScroll = () => {
    if (object.current) {
      object.current.rotation.y = window.scrollY * 0.001;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default RotatingObject;
