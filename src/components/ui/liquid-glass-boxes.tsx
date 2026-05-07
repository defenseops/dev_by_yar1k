'use client'

import React, { useEffect, useRef } from 'react';

interface GlassTunnel3DProps {
  boxCount?: number;
  circleCount?: number;
  animationDuration?: number;
  boxWidth?: number;
  boxHeight?: number;
  boxDepth?: number;
  holeSize?: number;
  circleSize?: number;
  perspectiveOrigin?: string;
}

const GlassTunnel3D = ({
  boxCount = 3,
  circleCount = 4,
  animationDuration = 5,
  boxWidth = 450,
  boxHeight = 350,
  boxDepth = 10,
  holeSize = 40,
  circleSize = 150,
  perspectiveOrigin = '15% 51%',
}: GlassTunnel3DProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      circlesRef.current.forEach(circle => {
        if (circle) circle.classList.add('circle-active');
      });
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const boxStyle = {
    '--tc': boxCount,
    '--count': circleCount,
    '--duration': `${animationDuration}s`,
    '--step': `calc(${animationDuration}s / ${circleCount})`,
    '--w': `${boxWidth}px`,
    '--h': `${boxHeight}px`,
    '--d': `${boxDepth}px`,
    '--hd': `${boxDepth / 2}px`,
    '--hole': `${holeSize}%`,
    '--circle-size': `${circleSize}px`
  } as React.CSSProperties;

  return (
    <div className="w-full h-full overflow-hidden relative flex items-center justify-center"
         style={{
           background: 'transparent',
           transformStyle: 'preserve-3d',
           perspective: '10000px',
           perspectiveOrigin,
           contain: 'strict',
           isolation: 'isolate',
         }}>

      <div
        ref={sceneRef}
        className="w-full h-full flex items-center justify-center tunnel-scene"
        style={{
          ...boxStyle,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {Array.from({ length: boxCount }, (_, i) => (
          <div
            key={`box-${i}`}
            className="absolute tunnel-box"
            style={{
              ['--i' as string]: i + 1,
              width: 'var(--w)',
              height: 'var(--h)',
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            {(['front', 'back', 'left', 'right', 'top', 'bottom'] as const).map(face => (
              <div
                key={face}
                className={`absolute glass-${face}`}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  ...(face === 'front' || face === 'back' ? {
                    width: 'var(--w)',
                    height: 'var(--h)',
                    mask: 'radial-gradient(circle at 50% 50%, transparent var(--hole), white var(--hole))',
                    WebkitMask: 'radial-gradient(circle at 50% 50%, transparent var(--hole), white var(--hole))'
                  } : {}),
                  ...(face === 'left' || face === 'right' ? {
                    width: 'var(--d)',
                    height: 'var(--h)'
                  } : {}),
                  ...(face === 'top' || face === 'bottom' ? {
                    width: 'var(--w)',
                    height: 'var(--d)'
                  } : {})
                }}
              />
            ))}
          </div>
        ))}

        {Array.from({ length: circleCount }, (_, i) => (
          <div
            key={`circle-${i}`}
            ref={el => { if (el) circlesRef.current[i] = el; }}
            className="absolute tunnel-circle opacity-0 bg-white rounded-full"
            style={{
              ['--j' as string]: i + 1,
              width: 'var(--circle-size)',
              height: 'var(--circle-size)',
              willChange: 'transform, opacity',
              boxShadow: `
                inset 20px 20px 40px rgba(0,0,0,.32),
                inset -20px -20px 40px rgba(255,255,255,.85),
                inset 0 0 16px rgba(0,0,0,.15),
                12px 18px 28px rgba(0,0,0,.45)
              `
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                inset: '18% 46% 56% 12%',
                background: 'radial-gradient(80% 70% at 30% 30%, rgba(255,255,255,0.95), rgba(255,255,255,0.35) 40%, rgba(255,255,255,0) 75%)',
                filter: 'blur(1px)',
                mixBlendMode: 'screen'
              }}
            />
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @property --Ctz {
          syntax: "<length>";
          inherits: false;
          initial-value: -415px;
        }
        @property --scale {
          syntax: "<number>";
          inherits: false;
          initial-value: 1;
        }
        @property --space {
          syntax: "<length>";
          inherits: false;
          initial-value: 0px;
        }
        @property --rtY {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
        @property --rtX {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .tunnel-scene {
          transform: rotateY(var(--rtY)) rotateX(var(--rtX));
          animation: angle 1s ease-in-out forwards;
        }

        .tunnel-box {
          transform: translateZ(calc((var(--i) - (var(--tc) + 1) / 2) * var(--space)));
          animation: space 1s 0.8s ease-in-out forwards;
          will-change: transform;
        }

        .glass-back {
          transform: translateZ(calc(-1 * var(--d))) rotateY(180deg);
        }

        .glass-left {
          transform: translateZ(calc(-1 * var(--hd))) translateX(calc(-1 * var(--hd))) rotateY(90deg);
        }

        .glass-right {
          right: 0;
          transform: translateZ(calc(-1 * var(--hd))) translateX(var(--hd)) rotateY(90deg);
        }

        .glass-top {
          transform: translateZ(calc(-1 * var(--hd))) translateY(calc(-1 * var(--hd))) rotateX(90deg);
        }

        .glass-bottom {
          bottom: 0;
          transform: translateZ(calc(-1 * var(--hd))) translateY(var(--hd)) rotateX(90deg);
        }

        .circle-active {
          transform: translateZ(var(--Ctz)) rotate(45deg) rotateY(1deg) rotateX(88deg) scale(var(--scale));
          animation: move var(--duration) linear infinite, fade var(--duration) linear infinite;
          animation-delay: calc((var(--j) - 1) * var(--step));
          will-change: transform, opacity;
        }

        @keyframes angle {
          0% {
            --rtY: 0deg;
            --rtX: 0deg;
          }
          100% {
            --rtY: 45deg;
            --rtX: 56deg;
          }
        }

        @keyframes space {
          0% {
            --space: 0px;
          }
          100% {
            --space: 180px;
          }
        }

        @keyframes move {
          0% {
            --Ctz: -515px;
          }
          100% {
            --Ctz: 615px;
          }
        }

        @keyframes fade {
          0%, 75%, 100% {
            opacity: 0;
          }
          0%, 85%, 100% {
            --scale: 0.2;
          }
          35%, 60% {
            --scale: 1.2;
          }
          30%, 75% {
            opacity: 1;
          }
        }
      ` }} />
    </div>
  );
};

export default GlassTunnel3D;
