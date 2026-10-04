import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      console.warn("WebGL not supported, skipping 3D background");
      return;
    }

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050508, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xa855f7, 4, 25); // Violet
    pointLight1.position.set(4, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xec4899, 3.5, 25); // Magenta
    pointLight2.position.set(-4, -2, 2);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x38bdf8, 3, 20); // Cyan
    pointLight3.position.set(0, 4, -2);
    scene.add(pointLight3);

    // 3. Central Kinetic 3D Sculpture Group
    const sculptureGroup = new THREE.Group();
    sculptureGroup.position.set(2.4, 0, 0); // Positioned nicely towards the right
    scene.add(sculptureGroup);

    // Decoupled inner group for mouse parallax & ambient spin
    const innerGroup = new THREE.Group();
    sculptureGroup.add(innerGroup);

    // A. Main Torus Knot (Wireframe & Glass-like)
    const torusGeometry = new THREE.TorusKnotGeometry(1.4, 0.42, 128, 32, 2, 3);

    // Wireframe outer cage
    const wireframeMat = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x581c87,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.45,
    });
    const wireframeTorus = new THREE.Mesh(torusGeometry, wireframeMat);
    innerGroup.add(wireframeTorus);

    // Inner translucent core
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e1035,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.85,
      thickness: 1.2,
      ior: 1.5,
      transparent: true,
      opacity: 0.8,
      reflectivity: 0.7,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const coreTorus = new THREE.Mesh(torusGeometry, coreMat);
    coreTorus.scale.set(0.96, 0.96, 0.96);
    innerGroup.add(coreTorus);

    // B. Concentric Orbital Rings
    const ringGroup = new THREE.Group();
    innerGroup.add(ringGroup);

    const ringGeom1 = new THREE.TorusGeometry(2.3, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ringGeom1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ringGeom2 = new THREE.TorusGeometry(2.7, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      transparent: true,
      opacity: 0.3,
    });
    const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ringGroup.add(ring2);

    // C. Floating Particles Constellation
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0xa855f7),
      new THREE.Color(0xec4899),
      new THREE.Color(0x38bdf8),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Spread across a wide space
      particlePositions[i3] = (Math.random() - 0.5) * 18;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 10 - 1;

      const randomColor =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
      particleColors[i3] = randomColor.r;
      particleColors[i3 + 1] = randomColor.g;
      particleColors[i3 + 2] = randomColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    // Create subtle circular texture for particles
    const canvasTexture = document.createElement("canvas");
    canvasTexture.width = 32;
    canvasTexture.height = 32;
    const ctx = canvasTexture.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.4, "rgba(255,255,255,0.8)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    const pTexture = new THREE.CanvasTexture(canvasTexture);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.12,
      map: pTexture,
      transparent: true,
      vertexColors: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Handle Resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Adjust group position depending on mobile vs desktop
      if (width < 768) {
        sculptureGroup.position.set(0, 0.8, -1);
        sculptureGroup.scale.set(0.65, 0.65, 0.65);
      } else if (width < 1200) {
        sculptureGroup.position.set(1.5, 0, 0);
        sculptureGroup.scale.set(0.85, 0.85, 0.85);
      } else {
        sculptureGroup.position.set(2.4, 0, 0);
        sculptureGroup.scale.set(1.05, 1.05, 1.05);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // 5. GSAP ScrollTrigger Integration
    // As user scrolls, the 3D sculpture rotates and repositions dynamically
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    // Morph rotation & position based on scroll progress
    scrollTimeline
      .to(
        sculptureGroup.position,
        {
          x: -2.0, // Moves to left behind about section
          y: -0.5,
          z: -1.5,
          ease: "none",
        },
        0
      )
      .to(
        sculptureGroup.rotation,
        {
          x: Math.PI * 1.5,
          y: Math.PI * 2,
          z: Math.PI * 0.5,
          ease: "none",
        },
        0
      )
      .to(
        particles.rotation,
        {
          y: Math.PI * 0.8,
          x: Math.PI * 0.4,
          ease: "none",
        },
        0
      )
      .to(
        pointLight1.position,
        {
          x: -3,
          y: 2,
          z: 4,
          ease: "none",
        },
        0
      );

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Ambient self-rotation (smooth clock-based, zero mouse shaking)
      wireframeTorus.rotation.x = elapsedTime * 0.15;
      wireframeTorus.rotation.y = elapsedTime * 0.2;
      coreTorus.rotation.x = elapsedTime * 0.15;
      coreTorus.rotation.y = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.25;
      ring2.rotation.x = elapsedTime * -0.2;

      // Slow drift of particle field
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = elapsedTime * 0.01;

      // Gentle pulsating lights
      pointLight1.intensity = 3.5 + Math.sin(elapsedTime * 1.5) * 1.0;
      pointLight2.intensity = 3.0 + Math.cos(elapsedTime * 1.2) * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      torusGeometry.dispose();
      wireframeMat.dispose();
      coreMat.dispose();
      ringGeom1.dispose();
      ringMat1.dispose();
      ringGeom2.dispose();
      ringMat2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      pTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
