import { useState } from "react";
import PhotoModal from "../components/PhotoModal";

import trio1 from "../assets/trio1.jpg";
import trio2 from "../assets/trio2.jpg";
import trio3 from "../assets/trio3.jpg";
import trio4 from "../assets/trio4.jpg";
import trio5 from "../assets/trio5.jpg";
import trio6 from "../assets/trio6.jpg";
import trio7 from "../assets/trio7.jpg";
import trio8 from "../assets/trio8.jpg";

const photos = [
  { src: trio1, caption: "Goated" },
  { src: trio2, caption: "Peak chaos" },
  { src: trio3, caption: "TRADS" },
  { src: trio4, caption: "Cutest" },
  { src: trio5, caption: "Sam's 20th" },
  { src: trio6, caption: "OG Hangout spot" },
  { src: trio7, caption: "Haircut Xd" },
  { src: trio8, caption: "Aw look at me & him" },
];

const TheTrio = () => {

  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);

  return (

    <div className="page-container max-w-5xl mx-auto">


      <div className="text-center mb-10 fade-in-up">

        <h1 className="page-title">
          The Trio 👑
        </h1>

        <p className="page-subtitle italic">
          "Stop thirdwheeling me & Rudra lil bro"
        </p>

      </div>



      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


        {photos.map((p, i) => (

          <div
            key={i}
            className="cursor-pointer fade-in-up"
            onClick={() => setSelectedPhoto(p)}
          >

            <div className="soft-card hover:scale-105 transition duration-300">


              {/* Perfect alignment container */}

              <div className="h-64 flex items-center justify-center bg-primary/5 rounded-xl overflow-hidden">

                <img
                  src={p.src}
                  alt={p.caption}
                  className="max-h-full max-w-full object-contain"
                />

              </div>


              <p className="text-sm font-medium text-center mt-3">
                {p.caption}
              </p>


            </div>

          </div>

        ))}


      </div>



      {selectedPhoto && (

        <PhotoModal
          src={selectedPhoto.src}
          alt={selectedPhoto.caption}
          onClose={() => setSelectedPhoto(null)}
        />

      )}


    </div>

  );

};

export default TheTrio;