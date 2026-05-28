import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const Particles = ({ isDayClosed }: { isDayClosed: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, 
      y: Math.random() * 100, 
      size: Math.random() * 10 + 4, // Más grandes para que se logren ver de fondo
      delay: Math.random() * 5, 
      duration: Math.random() * 15 + 8, 
    }));
    setParticles(newParticles);
  }, []);

  // Creamos las partículas directamente en el body usando React Portal
  return createPortal(
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ position: 'fixed' }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}vw`, // Usamos vw/vh ya que estamos en fixed en el body
            top: `${p.y}vh`,
            width: p.size,
            height: p.size,
            backgroundColor: isDayClosed ? 'var(--color-day)' : 'var(--color-dawn)', // Colores Cyberpunk/Nexus
            filter: 'blur(2px)', 
            boxShadow: `0 0 ${p.size * 3}px ${isDayClosed ? 'var(--color-day)' : 'var(--color-dawn)'}` // Brillo fuerte
          }}
          animate={{
            y: [0, -150, 0], 
            x: [0, Math.random() * 80 - 40, 0], 
            opacity: [0.1, 0.8, 0.1], // Brillan más para destacarse
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>,
    document.body // Inyección directa en <body>
  );
};

export default Particles;
