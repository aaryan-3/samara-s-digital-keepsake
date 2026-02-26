import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
}

const colors = [
  "hsl(350 65% 62%)",
  "hsl(340 50% 75%)",
  "hsl(30 40% 93%)",
  "hsl(35 80% 55%)",
  "hsl(345 60% 70%)",
  "hsl(200 60% 70%)",
];

const ConfettiEffect = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const p: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      size: 4 + Math.random() * 8,
    }));
    setParticles(p);

    const timer = setTimeout(() => setParticles([]), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 rounded-sm"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animation: `confettiFall ${p.duration}s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;
