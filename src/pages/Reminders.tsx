import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";

const items = [
  "Arpit Bala",
  "Cats",
  "Social 2-pod",
  "Wired earphones",
  "Society Pani Puri",
  "Karan Aujla",
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
            <p className="text-lg font-medium text-foreground">{item}</p>
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
