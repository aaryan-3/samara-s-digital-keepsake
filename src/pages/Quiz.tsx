import { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    q: "What momos did we eat near backroad?",
    left: "Tandoori Fried",
    right: "Kurkure Fried",
  },
  {
    q: "When did we first fight?",
    left: "10 Jan 2025",
    right: "11 Jan 2025",
  },
  {
    q: "Best hangout spot with Rudra",
    left: "Carter Road",
    right: "My Room",
  },
  {
    q: "Where were you when I got my CET results?",
    left: "Sia's House",
    right: "Third Wave",
  },
  {
    q: "When did we first meet?",
    left: "2024",
    right: "2023",
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<"left" | "right" | null>(null);
  const [done, setDone] = useState(false);

  const handleSelect = (choice: "left" | "right") => {
    if (selected) return;
    setSelected(choice);
    if (choice === "right") setScore((s) => s + 1);
    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setDone(true);
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }, 1200);
  };

  const getScoreMessage = () => {
    const finalScore = score + (selected === "right" && done ? 0 : 0);
    if (finalScore === 5) return '"You actually remember everything."';
    if (finalScore >= 3) return '"Not bad honestly."';
    return '"That\'s embarrassing."';
  };

  if (done) {
    return (
      <div className="page-container flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center">
        <div className="soft-card max-w-md w-full fade-in-up">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-2">
            You scored {score}/{questions.length}
          </h2>
          <p className="text-lg text-muted-foreground italic mb-6">{getScoreMessage()}</p>
          <Link
            to="/"
            className="inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-glow transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="page-container max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="text-center mb-10 fade-in-up">
        <h1 className="page-title">Do You Even Know Us? 🤔</h1>
        <p className="page-subtitle">"Let's see if you remember properly."</p>
      </div>

      {/* Progress */}
      <div className="w-full max-w-md mb-8 fade-in-up stagger-1">
        <p className="text-sm text-muted-foreground text-center mb-2">
          Question {current + 1} of {questions.length}
        </p>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="soft-card w-full max-w-md text-center fade-in-up stagger-2" key={current}>
        <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-8">
          {q.q}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleSelect("left")}
            disabled={!!selected}
            className={`p-4 rounded-xl font-medium text-sm transition-all duration-300 border-2 ${
              selected === "left"
                ? "border-destructive bg-destructive/10 text-destructive"
                : "border-border hover:border-primary hover:bg-primary/5 text-foreground"
            } ${!selected ? "hover:scale-105" : ""}`}
          >
            {q.left}
          </button>
          <button
            onClick={() => handleSelect("right")}
            disabled={!!selected}
            className={`p-4 rounded-xl font-medium text-sm transition-all duration-300 border-2 ${
              selected === "right"
                ? "border-green-500 bg-green-50 text-green-700"
                : selected === "left"
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-border hover:border-primary hover:bg-primary/5 text-foreground"
            } ${!selected ? "hover:scale-105" : ""}`}
          >
            {q.right}
          </button>
        </div>

        {selected && (
          <p className={`mt-4 text-sm font-medium ${selected === "right" ? "text-green-600" : "text-destructive"}`}>
            {selected === "right" ? "Correct! ✅" : "Wrong! ❌"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
