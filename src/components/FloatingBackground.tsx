
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'circle' | 'square' | 'diamond';
  color: string;
  duration: number;
  drift: number;
}

const FloatingBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const colors = [
    'linear-gradient(45deg, #00bcd4, #2196f3)',
    'linear-gradient(135deg, #9c27b0, #673ab7)',
    'linear-gradient(225deg, #ff5722, #ff9800)',
    'linear-gradient(315deg, #4caf50, #8bc34a)',
    'linear-gradient(45deg, #e91e63, #f44336)',
  ];

  const createParticle = (): Particle => {
    return {
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 50,
      size: Math.random() * 30 + 20, // 20-50px
      type: ['circle', 'square', 'diamond'][Math.floor(Math.random() * 3)] as any,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 25 + 20, // 20-45 seconds (longer duration)
      drift: (Math.random() - 0.5) * 100, // -50px to 50px horizontal drift
    };
  };

  useEffect(() => {
    const addParticle = () => {
      const particle = createParticle();
      setParticles(prev => [...prev, particle]);

      // Remove particle after its animation duration
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== particle.id));
      }, particle.duration * 1000);
    };

    // Add initial particles
    for (let i = 0; i < 8; i++) {
      setTimeout(() => addParticle(), i * 2000);
    }

    // Continue adding particles
    const interval = setInterval(addParticle, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="floating-background">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`floating-particle particle-${particle.type}`}
          style={{
            left: `${particle.x}px`,
            bottom: '-50px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            animationDuration: `${particle.duration}s`,
            '--drift': `${particle.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;
