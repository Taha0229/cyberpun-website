import Link from 'next/link';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Button, buttonVariants } from "@/components/ui/button"

const Hero = () => {
  const canvasRef = useRef(null);
  let renderer;

  useEffect(() => {
    let scene, camera, starGeo, stars;

    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      canvasRef.current.appendChild(renderer.domElement);

      starGeo = new THREE.BufferGeometry();

      const starVertices = new Float32Array(6000 * 3);
      for (let i = 0; i < 6000; i++) {
        starVertices[i * 3] = (Math.random() - 0.5) * 600;
        starVertices[i * 3 + 1] = (Math.random() - 0.5) * 600;
        starVertices[i * 3 + 2] = (Math.random() - 0.5) * 600;
      }

      starGeo.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));

      let sprite = new THREE.TextureLoader().load('star.svg');
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);
      animate();
    }

    function animate() {
      const positionAttribute = starGeo.getAttribute('position');
      for (let i = 0; i < positionAttribute.count; i++) {
        const y = positionAttribute.getY(i);
        positionAttribute.setY(i, y - 3); // Adjust the speed as needed

        if (y < -300) {
          positionAttribute.setY(i, 300);
        }
      }

      positionAttribute.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    function onWindowResize() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', onWindowResize);

    init();

    return () => {
      if (renderer) {
        renderer.dispose();
      }
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (renderer) {
        renderer.domElement.remove();
      }
    };
  }, []);

  return (
    <section className=''>
      <div className='absolute  left-1/2 -translate-x-1/2 translate-y-full z-30 w-max text-white'>
        <p className='text-8xl font-trial tracking-tight'>TO INFINITY </p> <span className='text-8xl font-bold font-trial tracking-wider'>&&</span>
        <p className='text-8xl font-trial inline tracking-wider'>  BEYOND</p>
        <div className='flex space-x-12 justify-center text-xl'>
          <Link href={"/projects"} className={buttonVariants({ variant: "outline", size: "custom" })}>PROJECTS</Link>
          <Link href={"/contact"} className={buttonVariants({ variant: "outline", size: "custom" })}>HIRE ME</Link>
        </div>
      </div>
      <div className='' ref={canvasRef} />

    </section>
  );
};

export default Hero;
