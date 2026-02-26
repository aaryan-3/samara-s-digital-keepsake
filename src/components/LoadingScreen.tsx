import { useEffect, useState } from "react";

const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onDone, 300);
          return 100;
        }
        return p + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-6">
      <div className="text-4xl animate-bounce">🎂</div>
      <p className="font-display text-xl text-foreground italic">
        Preparing something special...
      </p>
      <div className="w-48 h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
