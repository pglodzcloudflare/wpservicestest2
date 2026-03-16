import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
export const AnimatedLogisticsBackground: React.FC = () => {
  // Generate stable particle configuration to prevent flickering on re-renders
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 1000,
      y: Math.random() * 1000,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
      drift: -20 - Math.random() * 40,
    }));
  }, []);
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Smoother, Vibrant Logistics Paths */}
        <motion.path
          d="M-50,200 C250,50 450,350 650,200 S950,50 1100,250"
          fill="transparent"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="15,10"
          style={{ willChange: "transform" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 0.4,
            strokeDashoffset: [0, -200]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            opacity: { duration: 2 }
          }}
        />
        <motion.path
          d="M-100,700 C200,600 400,900 700,750 S950,600 1200,800"
          fill="transparent"
          stroke="#fb923c"
          strokeWidth="1.5"
          strokeDasharray="10,12"
          style={{ willChange: "transform" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 0.3,
            strokeDashoffset: [0, 200]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            opacity: { duration: 2 }
          }}
        />
        {/* Orbiting Dots */}
        {[1, 2, 3].map((i) => (
          <motion.circle
            key={`orbit-${i}`}
            r={3 + i}
            fill={i % 2 === 0 ? "#3b82f6" : "#fb923c"}
            opacity="0.5"
            style={{ willChange: "transform" }}
            animate={{
              cx: [400 + i * 50, 600 + i * 50, 400 + i * 50],
              cy: [300, 500, 300],
            }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        {/* Stabilized Particles */}
        {particles.map((p) => (
          <motion.circle
            key={`particle-${p.id}`}
            r={1.5}
            cx={p.x}
            cy={p.y}
            fill="white"
            style={{ willChange: "transform, opacity" }}
            animate={{
              y: [0, p.drift, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
        {/* Floating Paper Airplane */}
        <motion.g
          style={{ willChange: "transform" }}
          animate={{
            x: [-100, 1100],
            y: [400, 300, 500, 400],
            rotate: [15, 5, 25, 15]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="text-white"
        >
          <path
            d="M0,0 L24,12 L0,24 L6,12 Z"
            fill="currentColor"
            opacity="0.4"
          />
        </motion.g>
      </svg>
    </div>
  );
};