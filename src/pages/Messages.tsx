import { useState } from "react";
import PhotoModal from "../components/PhotoModal";

import rudra from "../assets/rudra.jpg";
import ridhima from "../assets/ridhima.jpg";
import angelina from "../assets/angelina.jpg";
import sia from "../assets/sia.jpg";
import tanvi from "../assets/tanvi.jpg";
import aayushi from "../assets/aayushi.jpg";


const messages = [

  { name: "Rudra", src: rudra },

  { name: "Ridhima", src: ridhima },

  { name: "Angelina", src: angelina },

  { name: "Sia", src: sia },

  { name: "Tanvi", src: tanvi },

  { name: "Aayushi", src: aayushi },

];


const Messages = () => {

  const [selected, setSelected] = useState<any>(null);


  return (

    <div className="page-container max-w-4xl mx-auto">


      <div className="text-center mb-12 fade-in-up">

        <h1 className="page-title">
          Birthday Messages 💌
        </h1>

        <p className="page-subtitle">
          Messages from your friends
        </p>

      </div>



      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">


        {messages.map((m, i) => (

          <div
            key={i}
            onClick={() => setSelected(m)}
            className={`cursor-pointer fade-in-up stagger-${Math.min(i+1,8)}`}
          >

            <div className="soft-card transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-soft-lg">


              {/* Perfect alignment */}

              <div className="h-64 flex items-center justify-center bg-primary/5 rounded-xl overflow-hidden">

                <img
                  src={m.src}
                  alt={m.name}
                  className="max-h-full max-w-full object-contain transition duration-300"
                />

              </div>


              <p className="text-center text-sm font-medium mt-3 text-foreground">

                {m.name}

              </p>


            </div>

          </div>

        ))}


      </div>



      {selected && (

        <PhotoModal
          src={selected.src}
          alt={selected.name}
          onClose={() => setSelected(null)}
        />

      )}


    </div>

  );

};


export default Messages;