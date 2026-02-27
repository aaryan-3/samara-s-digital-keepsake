import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";

import catVideo from "../assets/cat.mp4";
import aujlaVideo from "../assets/aujla.mp4";
import arpitVideo from "../assets/arpit.mp4";

import catThumb from "../assets/cat-thumb.jpg";
import aujlaThumb from "../assets/aujla-thumb.jpg";
import arpitThumb from "../assets/arpit-thumb.jpg";

import socialPic from "../assets/social.jpg";
import earphonesPic from "../assets/earphones.jpg";
import streetPic from "../assets/street.jpg";
import shaqPic from "../assets/shaq.jpg";


const items = [

  {
    text: "Arpit Bala",
    emoji: "🎤",
    video: arpitVideo,
    thumb: arpitThumb
  },

  {
    text: "Cats",
    emoji: "🐱",
    video: catVideo,
    thumb: catThumb
  },

  {
    text: "Social 2-pod",
    emoji: "☕",
    image: socialPic
  },

  {
    text: "Wired earphones",
    emoji: "🎧",
    image: earphonesPic
  },

  {
    text: "Street Food",
    emoji: "🍽️",
    image: streetPic
  },

  {
    text: "Karan Aujla",
    emoji: "🎵",
    video: aujlaVideo,
    thumb: aujlaThumb
  },

  {
    text: "Shaquille O'Neal",
    emoji: "🏀",
    image: shaqPic
  },

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

        <p className="page-subtitle mt-2">
          These are some things that remind me of you
        </p>

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


            {/* VIDEO */}

            {item.video && (

              <div className="aspect-square rounded-xl mb-3 overflow-hidden mx-auto max-w-[120px]">

                <video
                  src={item.video}
                  poster={item.thumb}
                  controls
                  className="w-full h-full object-cover rounded-xl"
                />

              </div>

            )}


            {/* IMAGE */}

            {item.image && (

              <div className="aspect-square rounded-xl mb-3 overflow-hidden mx-auto max-w-[120px]">

                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full object-cover rounded-xl"
                />

              </div>

            )}


            <p className="text-lg font-medium text-foreground">
              {item.emoji} {item.text}
            </p>


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