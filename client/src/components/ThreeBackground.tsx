import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050510);
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 12);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const particleCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i*3] = (Math.random() - 0.5) * 60;
      positions[i*3+1] = (Math.random() - 0.5) * 35;
      positions[i*3+2] = (Math.random() - 0.5) * 40 - 20;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0x8b5cf6, size: 0.08, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending });
    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 800;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i*3] = (Math.random() - 0.5) * 200;
      starPositions[i*3+1] = (Math.random() - 0.5) * 100;
      starPositions[i*3+2] = (Math.random() - 0.5) * 80 - 50;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.4 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const torusKnotGeo = new THREE.TorusKnotGeometry(1.2, 0.28, 200, 32);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0xc084fc, emissive: 0x2e1065, roughness: 0.3, metalness: 0.7, transparent: true, opacity: 0.35
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, knotMat);
    scene.add(torusKnot);

    const ambientLight = new THREE.AmbientLight(0x111122);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(2, 5, 3);
    scene.add(dirLight);
    const backLight = new THREE.PointLight(0x6d28d9, 0.5);
    backLight.position.set(-2, 1, -4);
    scene.add(backLight);
    const fillLight = new THREE.PointLight(0x3b82f6, 0.4);
    fillLight.position.set(3, 2, 4);
    scene.add(fillLight);

    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    function animate() {
      animationId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      particles.rotation.y = time * 0.03;
      particles.rotation.x = Math.sin(time * 0.1) * 0.1;
      stars.rotation.y = time * 0.01;
      stars.rotation.x = time * 0.005;
      torusKnot.rotation.x = time * 0.2;
      torusKnot.rotation.y = time * 0.3;
      const targetX = mouseX * 0.5;
      const targetY = mouseY * 0.3;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  return <canvas id="three-canvas" ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
}