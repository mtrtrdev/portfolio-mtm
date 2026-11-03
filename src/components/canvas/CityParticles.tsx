"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CityParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 240;
    camera.position.y = 20;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Particles: Grid of lights reminiscent of Manhattan grid & skyscraper lights
    const particleCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const accentGreen = new THREE.Color("#10b981");
    const softWhite = new THREE.Color("#fafafa");
    const mutedGray = new THREE.Color("#52525b");

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Grid-like layout with randomized heights (like NYC skyline buildings)
      const x = (Math.random() - 0.5) * 500;
      const z = (Math.random() - 0.5) * 500;
      const y = (Math.random() - 0.5) * 160 - 20;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      // Color distribution: mostly muted with subtle white & emerald green accents
      const rand = Math.random();
      let color: THREE.Color;
      if (rand > 0.94) {
        color = accentGreen;
        scales[i] = 2.4;
      } else if (rand > 0.75) {
        color = softWhite;
        scales[i] = 1.6;
      } else {
        color = mutedGray;
        scales[i] = 0.9;
      }

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Material with round soft point
    const material = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Architectural Ground Grid Line
    const gridHelper = new THREE.GridHelper(600, 30, 0x3f3f46, 0x18181b);
    gridHelper.position.y = -90;
    scene.add(gridHelper);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onPointerMove = (e: MouseEvent) => {
      mouseX = (e.clientX - windowHalfX) * 0.08;
      mouseY = (e.clientY - windowHalfY) * 0.08;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Handle Resize
    const onWindowResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth camera interpolation
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      camera.position.x = targetX * 0.6;
      camera.position.y = 20 - targetY * 0.4;
      camera.lookAt(0, -10, 0);

      // Gentle rotation & subtle undulating wave
      particles.rotation.y = elapsedTime * 0.025;
      gridHelper.rotation.y = elapsedTime * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onWindowResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60"
      aria-hidden="true"
    />
  );
}

