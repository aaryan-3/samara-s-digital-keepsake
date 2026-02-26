import { Link } from "react-router-dom";
import timelineImg from "@/assets/timeline-meme.png";

const events = [
  { era: "Long Time Ago", items: ["Invention of Fire 🔥", "Invention of Wheel ☸️"] },
  { era: "1st March, 2006", items: ["Samara Creado BDAY!!! 🎂🎉"], highlight: true },
  { era: "2025", items: ["Present Time 🎁"] },
];

const Timeline = () => {
  return (
    <div className="page-container max-w-3xl mx-auto text-center">
      <div className="mb-10 fade-in-up">
        <h1 className="page-title">Most Important Events In History 📜</h1>
        <p className="page-subtitle">"Some moments changed the world forever."</p>
      </div>

      <div className="fade-in-up stagger-1 mb-12">
        <img
          src={timelineImg}
          alt="Timeline of most important historical events"
          className="w-full max-w-lg mx-auto rounded-2xl shadow-soft-lg"
        />
      </div>

      {/* Timeline */}
      <div className="max-w-md mx-auto space-y-8 mb-12">
        {events.map((event, i) => (
          <div
            key={i}
            className={`fade-in-up stagger-${i + 2} soft-card ${event.highlight ? "border-primary/30 bg-warm-pink/20 shadow-glow" : ""}`}
          >
            <p className={`font-display text-lg font-bold ${event.highlight ? "text-primary" : "text-foreground"} mb-2`}>
              {event.era}
            </p>
            {event.items.map((item, j) => (
              <p key={j} className={`text-sm ${event.highlight ? "text-primary font-semibold text-base" : "text-muted-foreground"}`}>
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground italic mb-8 fade-in-up stagger-6">
        "Scientifically accurate"
      </p>

      <Link
        to="/"
        className="fade-in-up stagger-7 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Return to Reality →
      </Link>
    </div>
  );
};

export default Timeline;
