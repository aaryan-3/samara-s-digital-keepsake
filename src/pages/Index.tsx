import { Link } from "react-router-dom";
import ConfettiEffect from "@/components/ConfettiEffect";
import heroImg from "@/assets/hero-birthday.png";

const Home = () => {
  return (
    <div className="page-container flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center">
      <ConfettiEffect />
      
      <div className="fade-in-up max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold font-display text-foreground mb-4">
          Happy Birthday Samara 🎂
        </h1>
        <p className="page-subtitle mb-8 stagger-1 fade-in-up">
          "A small place on the internet made just for you."
        </p>
      </div>

      <div className="fade-in-up stagger-2 mb-10">
        <img
          src={heroImg}
          alt="Birthday celebration illustration"
          className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-3xl shadow-soft-lg mx-auto"
        />
      </div>

      <Link
        to="/memories"
        className="fade-in-up stagger-3 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium shadow-glow hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
      >
        Start Exploring →
      </Link>
    </div>
  );
};

export default Home;
