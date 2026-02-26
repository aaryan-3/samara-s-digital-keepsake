import { useState } from "react";
import PhotoModal from "../components/PhotoModal";

import memory1 from "../assets/memory1.jpg";
import memory2 from "../assets/memory2.jpg";
import memory3 from "../assets/memory3.jpg";
import memory4 from "../assets/memory4.jpg";
import memory5 from "../assets/memory5.jpg";
import memory6 from "../assets/memory6.jpg";
import memory7 from "../assets/memory7.jpg";
import memory8 from "../assets/memory8.jpg";
import memory9 from "../assets/memory9.jpg";
import memory10 from "../assets/memory10.jpg";

const memories = [
  { id: 1, src: memory1, caption: "Optionally chopped", rotate: "-2deg" },
  { id: 2, src: memory2, caption: "Badmintonnnn", rotate: "3deg" },
  { id: 3, src: memory3, caption: "RAPHINHAAAAA", rotate: "-1deg" },
  { id: 4, src: memory4, caption: "Trip to At(L)as", rotate: "2deg" },
  { id: 5, src: memory5, caption: "Trip to the greatest college in Bombay", rotate: "-3deg" },
  { id: 6, src: memory6, caption: "TBSM 😥", rotate: "1deg" },
  { id: 7, src: memory7, caption: "MODI MODI MODI", rotate: "-2deg" },
  { id: 8, src: memory8, caption: "Three Wise Samaras", rotate: "3deg" },
  { id: 9, src: memory9, caption: "Cardio & Cat", rotate: "-1deg" },
  { id: 10, src: memory10, caption: "DJ → Lokhandwala", rotate: "2deg" },
];

export default function Memories() {

  const [selectedMemory, setSelectedMemory] = useState<any>(null);

  return (

    <div className="max-w-6xl mx-auto p-6">


      <h1 className="text-3xl font-bold text-center mb-10">
        Memories 📸
      </h1>



      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {memories.map((m) => (

          <div
            key={m.id}
            onClick={() => setSelectedMemory(m)}
            className="cursor-pointer"
            style={{ transform: `rotate(${m.rotate})` }}
          >


            <div className="bg-white shadow-lg p-3 hover:scale-105 transition duration-300">


              <div className="aspect-square overflow-hidden bg-gray-100">

                <img
                  src={m.src}
                  alt={m.caption}
                  className="w-full h-full object-cover"
                />

              </div>


              <p className="text-center text-sm mt-3 font-medium">
                {m.caption}
              </p>


            </div>


          </div>

        ))}

      </div>



      {selectedMemory && (

        <PhotoModal
          src={selectedMemory.src}
          alt={selectedMemory.caption}
          onClose={() => setSelectedMemory(null)}
        />

      )}


    </div>

  );

}