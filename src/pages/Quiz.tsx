import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    q: "Can you drive a manual?",
    correct: "No",
    wrong: "Yes",
  },
  {
    q: "Do you have the worst feed among you, Rudra and I?",
    correct: "Obviously?",
    wrong: "No",
  },
  {
    q: "Can you drive a cycle?",
    correct: "No",
    wrong: "Yes",
  },
  {
    q: "Are you always right?",

    correct: "No",
    wrong: "Yes",
  },
  {
    q: "Are you the most goated among us all? 😜",
    correct: "Yes",
    wrong: "No",
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<"left" | "right" | null>(null);
  const [done, setDone] = useState(false);

  // Randomize correct answer position for each question (stable per mount)
  const layouts = useMemo(
    () => questions.map(() => (Math.random() < 0.5 ? "left" : "right")),
    []
  );

  const handleSelect = (choice: "left" | "right") => {
    if (selected) return;
    setSelected(choice);
    const correctSide = layouts[current];
    if (choice === correctSide) setScore((s) => s + 1);
    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setDone(true);
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }, 1200);
  };

  const isCorrect = selected === layouts[current];

  const getScoreMessage = () => {
    if (score === 5) return '"You actually remember everything."';
    if (score >= 3) return '"Not bad honestly."';
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
  const correctSide = layouts[current];
  const leftOption = correctSide === "left" ? q.correct : q.wrong;
  const rightOption = correctSide === "right" ? q.correct : q.wrong;

  const getButtonClass = (side: "left" | "right") => {
    if (!selected) return "border-border hover:border-primary hover:bg-primary/5 text-foreground hover:scale-105";
    const isThisSideCorrect = side === correctSide;
    if (isThisSideCorrect) return "border-green-500 bg-green-50 text-green-700";
    if (selected === side) return "border-destructive bg-destructive/10 text-destructive";
    return "border-border text-foreground";
  };

  return (
    <div className="page-container max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="text-center mb-10 fade-in-up">
        <h1 className="page-title">How Well Do We Know You? 🤔</h1>
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
            className={`p-4 rounded-xl font-medium text-sm transition-all duration-300 border-2 ${getButtonClass("left")}`}
          >
            {leftOption}
          </button>
          <button
            onClick={() => handleSelect("right")}
            disabled={!!selected}
            className={`p-4 rounded-xl font-medium text-sm transition-all duration-300 border-2 ${getButtonClass("right")}`}
          >
            {rightOption}
          </button>
        </div>

        {selected && (
          <p className={`mt-4 text-sm font-medium ${isCorrect ? "text-green-600" : "text-destructive"}`}>
            {isCorrect ? "Correct! ✅" : "Wrong! ❌"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
