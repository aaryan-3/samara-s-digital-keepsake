import { useState } from "react";
import PhotoModal from "@/components/PhotoModal";

const captions = [
  "Goated",
  "Peak chaos",
  "TRADS",
  "Cutest",
  "Sam's 20th",
  "OG Hangout spot",
  "Haircut Xd",
  "Aw look at me & him",
];

const pastelColors = [
  "hsl(350 80% 92%)", "hsl(30 60% 92%)", "hsl(200 50% 92%)", "hsl(150 40% 92%)",
  "hsl(280 40% 92%)", "hsl(340 50% 92%)", "hsl(40 60% 92%)", "hsl(170 40% 92%)",
];

const TheTrio = () => {
  const [selectedCaption, setSelectedCaption] = useState<string | null>(null);

  return (
    <div className="page-container max-w-5xl mx-auto">
      <div className="text-center mb-10 fade-in-up">
        <h1 className="page-title">The Trio 👑</h1>
        <p className="page-subtitle italic">"Stop thirdwheeling me & Rudra lil bro"</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {captions.map((cap, i) => (
          <div
            key={i}
            className={`fade-in-up stagger-${Math.min(i + 1, 8)} group cursor-pointer`}
            onClick={() => setSelectedCaption(cap)}
          >
            <div className="soft-card hover:shadow-soft-lg hover:scale-105 transition-all duration-300 text-center">
              <div
                className="aspect-square rounded-xl mb-3 flex items-center justify-center text-3xl"
                style={{ backgroundColor: pastelColors[i] }}
              >
                📷
              </div>
              <p className="text-sm font-medium text-foreground">{cap}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCaption && (
        <PhotoModal
          src=""
          alt={selectedCaption}
          onClose={() => setSelectedCaption(null)}
        />
      )}

      <p className="text-center text-muted-foreground mt-10 text-sm fade-in-up">
        💡 Replace placeholders with your trio photos!
      </p>
    </div>
  );
};

export default TheTrio;
