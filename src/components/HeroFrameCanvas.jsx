import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 150;

export default function HeroFrameCanvas({ children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameIndexRef = useRef(0);
  const animFrameRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Preload all 150 frame images
  useEffect(() => {
    const imgArray = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/frames/ezgif-frame-${frameNum}.jpg`;

      img.onload = () => {
        // If loaded image is the active index, render it
        if (imgArray.indexOf(img) === frameIndexRef.current || imgArray.indexOf(img) === 0) {
          drawFrame(frameIndexRef.current);
        }
      };
      imgArray.push(img);
    }
    imagesRef.current = imgArray;

    return () => {
      imagesRef.current = [];
    };
  }, []);

  // Draw a frame on the canvas cleanly with object-fit: cover and DPR support
  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[index];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Update canvas internal pixel size if needed
    if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const containerRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (containerRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      drawHeight = height;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  };

  // Sizing & scroll listener
  useEffect(() => {
    const updateSizeAndDraw = () => {
      drawFrame(frameIndexRef.current);
    };

    window.addEventListener('resize', updateSizeAndDraw);

    const handleScroll = () => {
      if (animFrameRef.current) return;

      animFrameRef.current = requestAnimationFrame(() => {
        animFrameRef.current = null;
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const scrollableDistance = rect.height - window.innerHeight;

        if (scrollableDistance <= 0) return;

        const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
        setScrollProgress(progress);

        const targetFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(progress * (TOTAL_FRAMES - 1))
        );

        if (targetFrame !== frameIndexRef.current) {
          frameIndexRef.current = targetFrame;
          drawFrame(targetFrame);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateSizeAndDraw();

    return () => {
      window.removeEventListener('resize', updateSizeAndDraw);
      window.removeEventListener('scroll', handleScroll);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Compute content reveal opacity and scale transformation based on scrollProgress
  const revealThreshold = 0.38; // Slightly earlier reveal threshold
  const revealDuration = 0.22;

  const contentOpacity = scrollProgress < revealThreshold ? 0 : Math.min(1, (scrollProgress - revealThreshold) / revealDuration);
  const contentScale = scrollProgress < revealThreshold ? 0.94 : Math.min(1, 0.94 + ((scrollProgress - revealThreshold) / revealDuration) * 0.06);
  const contentTranslateY = scrollProgress < revealThreshold ? 24 : Math.max(0, (1 - (scrollProgress - revealThreshold) / revealDuration) * 24);

  return (
    <div ref={containerRef} class="relative w-full h-[800vh]">
      {/* Sticky viewport container */}
      <div class="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center items-center">
        {/* Canvas background layer */}
        <canvas
          ref={canvasRef}
          class="absolute inset-0 z-0 w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]"
        />

        {/* Dark spotlight overlay gradient */}
        <div class="absolute inset-0 z-0 bg-gradient-to-t from-surface via-surface/60 to-black/70 spotlight-gradient pointer-events-none" />

        {/* Hero content overlay */}
        <div class="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
          {typeof children === 'function' ? children({ scrollProgress }) : children}
        </div>
      </div>
    </div>
  );
}
