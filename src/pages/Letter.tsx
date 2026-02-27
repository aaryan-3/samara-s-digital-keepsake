import { useEffect, useState } from "react";

const letterText = `Happiest 20th Birthday SAMARA CREADO!!!!!

Have an amazing day dawg, I gotta be non-chalant but you know you da goat lil bro.

Here's to many many more years of Suraj Lama Momos, unfunny reels and Society Pani Puris together!!

Never change Samara, keep smiling and continue to be the amazing person you are!!

<3 <3 <3`;

const Letter = () => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < letterText.length) {
        setDisplayed(letterText.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="max-w-lg mx-auto">
        <div className="soft-card bg-warm-cream/50 fade-in-up">
          <h1 className="page-title text-center text-3xl md:text-4xl mb-8">A Letter For You 💌</h1>
          
          <div className="font-sans text-foreground/90 leading-relaxed whitespace-pre-line text-base md:text-lg">
            {displayed}
            {!done && (
              <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
