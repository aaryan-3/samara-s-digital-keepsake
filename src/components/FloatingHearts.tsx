import { useEffect, useState } from "react";

interface Heart {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const h: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
      size: 12 + Math.random() * 16,
    }));
    setHearts(h);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute bottom-0"
          style={{
            left: `${h.x}%`,
            fontSize: h.size,
            animation: `floatHeart ${h.duration}s ease-in-out ${h.delay}s infinite`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
