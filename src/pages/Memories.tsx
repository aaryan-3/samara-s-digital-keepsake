import { useState } from "react";
import PhotoModal from "@/components/PhotoModal";

const memories = [
  { id: 1, caption: "Optionally chopped", rotate: "-2deg" },
  { id: 2, caption: "Badmintonnnn", rotate: "3deg" },
  { id: 3, caption: "RAPHINHAAAAA", rotate: "-1deg" },
  { id: 4, caption: "Trip to At(L)as", rotate: "2deg" },
  { id: 5, caption: "Trip to the greatest college in Bombay", rotate: "-3deg" },
  { id: 6, caption: "TBSM 😥", rotate: "1deg" },
  { id: 7, caption: "MODI MODI MODI", rotate: "-2deg" },
  { id: 8, caption: "Three Wise Samaras", rotate: "3deg" },
  { id: 9, caption: "Cardio & Cat", rotate: "-1deg" },
  { id: 10, caption: "DJ → Lokhandwala", rotate: "2deg" },
];

const pastelColors = [
  "hsl(350 80% 92%)",
  "hsl(30 60% 92%)",
  "hsl(200 50% 92%)",
  "hsl(150 40% 92%)",
  "hsl(280 40% 92%)",
  "hsl(340 50% 92%)",
  "hsl(40 60% 92%)",
  "hsl(170 40% 92%)",
  "hsl(220 50% 92%)",
  "hsl(10 60% 92%)",
];

const Memories = () => {
  const [selectedMemory, setSelectedMemory] = useState<typeof memories[0] | null>(null);

  return (
    <div className="page-container max-w-6xl mx-auto">
      <div className="text-center mb-12 fade-in-up">
        <h1 className="page-title">Memories 📸</h1>
        <p className="page-subtitle">Our digital scrapbook</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {memories.map((m, i) => (
          <div
            key={m.id}
            className={`fade-in-up stagger-${Math.min(i + 1, 8)} cursor-pointer group`}
            style={{ transform: `rotate(${m.rotate})` }}
            onClick={() => setSelectedMemory(m)}
          >
            <div className="polaroid-card hover:shadow-soft-lg transition-all duration-300 hover:scale-105">
              <div
                className="aspect-square rounded-sm flex items-center justify-center text-4xl"
                style={{ backgroundColor: pastelColors[i] }}
              >
                📷
              </div>
              <p className="absolute bottom-4 left-0 right-0 text-center text-sm font-medium text-foreground px-2">
                {m.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedMemory && (
        <PhotoModal
          src=""
          alt={selectedMemory.caption}
          onClose={() => setSelectedMemory(null)}
        />
      )}

      <p className="text-center text-muted-foreground mt-12 text-sm fade-in-up">
        💡 Replace the placeholders with your actual photos!
      </p>
    </div>
  );
};

export default Memories;
