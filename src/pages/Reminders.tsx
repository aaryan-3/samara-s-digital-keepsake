import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";

const items = [
  { text: "Arpit Bala", emoji: "🎤" },
  { text: "Cats", emoji: "🐱" },
  { text: "Social 2-pod", emoji: "☕" },
  { text: "Wired earphones", emoji: "🎧" },
  { text: "Society Pani Puri", emoji: "🍽️" },
  { text: "Karan Aujla", emoji: "🎵" },
];

const pastelColors = [
  "hsl(350 80% 92%)", "hsl(30 60% 92%)", "hsl(200 50% 92%)",
  "hsl(150 40% 92%)", "hsl(280 40% 92%)", "hsl(340 50% 92%)",
];

const Reminders = () => {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setVisible((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.2 }
    );
    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-container max-w-2xl mx-auto text-center relative">
      <FloatingHearts />

      <div className="mb-12 fade-in-up">
        <h1 className="page-title text-3xl md:text-4xl">
          Happy Birthday ❤️
        </h1>
        <p className="page-subtitle mt-2">These are some things that remind me of you</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-12">
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            data-idx={i}
            className={`soft-card text-center transition-all duration-700 ${
              visible.has(i)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="aspect-square rounded-xl mb-3 flex items-center justify-center text-3xl mx-auto max-w-[120px] border-2 border-dashed border-primary/20"
              style={{ backgroundColor: pastelColors[i] }}
            >
              📷
            </div>
            <p className="text-lg font-medium text-foreground">{item.emoji} {item.text}</p>
          </div>
        ))}
      </div>

      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-glow hover:scale-105 transition-all duration-300 relative z-20"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Reminders;
