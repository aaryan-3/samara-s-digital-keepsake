import { Link } from "react-router-dom";
import samara from "../assets/samara.jpg";

const events = [
  { era: "Long Time Ago", items: ["Invention of Fire 🔥", "Invention of Wheel ☸️"] },
  { era: "1st March, 2006", items: ["Samara Creado BDAY!!! 🎂🎉"], highlight: true, hasPhoto: true },
  { era: "2025", items: ["Present Time 🎁"] },
];

const Timeline = () => {
  return (
    <div className="page-container max-w-3xl mx-auto text-center">

      <div className="mb-10 fade-in-up">

        <h1 className="page-title">
          Most Important Events In History 📜
        </h1>

        <p className="page-subtitle">
          "Some moments changed the world forever."
        </p>

      </div>


      {/* Timeline */}

      <div className="max-w-md mx-auto relative mb-12">

        {/* Vertical line */}

        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />


        <div className="space-y-8">

          {events.map((event, i) => (

            <div
              key={i}
              className={`fade-in-up stagger-${i + 1} soft-card relative ${
                event.highlight
                  ? "border-primary/30 bg-warm-pink/20 shadow-glow"
                  : ""
              }`}
            >

              {/* Timeline dot */}

              <div
                className={`absolute left-1/2 -top-3 w-6 h-6 rounded-full border-2 -translate-x-1/2 ${
                  event.highlight
                    ? "bg-primary border-primary"
                    : "bg-background border-primary/40"
                }`}
              />


              <p
                className={`font-display text-lg font-bold ${
                  event.highlight ? "text-primary" : "text-foreground"
                } mb-2`}
              >
                {event.era}
              </p>


              {event.items.map((item, j) => (

                <p
                  key={j}
                  className={`text-sm ${
                    event.highlight
                      ? "text-primary font-semibold text-base"
                      : "text-muted-foreground"
                  }`}
                >
                  {item}
                </p>

              ))}


              {/* Birthday Photo */}

              {event.hasPhoto && (

                <div className="mt-4 max-w-[220px] mx-auto rounded-xl overflow-hidden shadow-md">

                  <img
                    src={samara}
                    alt="Samara Birthday"
                    className="w-full object-cover"
                  />

                </div>

              )}

            </div>

          ))}

        </div>

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
