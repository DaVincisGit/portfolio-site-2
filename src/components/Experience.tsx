import React from "react";

const SHARED_BG =
  "radial-gradient(ellipse at 80% 30%, rgba(30,203,246,0.10) 0%, transparent 50%), " +
  "radial-gradient(ellipse at 0% 100%, rgba(55,61,185,0.10) 0%, transparent 70%), " +
  "linear-gradient(135deg, #0c102a 70%, #050815 100%)";

const EXPERIENCES = [
  {
    img: "/images/WLG.jpg",
    alt: "Western Law Group",
    blurb: "Specializing in HOA Law",
    url: "https://www.westernlawgroup.com/",
  },
  {
    img: "/images/covestro_image1.jpg",
    alt: "Covestro AG",
    blurb: "Covestro AG is a world-leading manufacturer of high-quality polymer materials.",
    url: "https://www.covestro.com/en",
  },
  {
    img: "/images/epsilon2.png",
    alt: "Epsilon",
    blurb: "Epsilon: The leader in outcome-based marketing.",
    url: "https://www.epsilon.com/us?utm_source=google&utm_medium=paid-search&utm_campaign=entr-q125-brand&cid=701Vl00000WePy9IAF&matchtype=e&utm_term=epsilon&gad_source=1&gad_campaignid=22174616831&gbraid=0AAAAACpOpG8yqhX20bt9_jYg3Yf4aCBbW&gclid=Cj0KCQjwuvrBBhDcARIsAKRrkjewHApFiou3-FCKqF9mp9ACG6ej8QQIm9ua15H3yoCJiv0PKIZdkBgaApflEALw_wcB",
  },
];

const Experience: React.FC = () => (
  <section
    id="experience"
    className="w-full py-16 flex flex-col justify-center items-center relative overflow-hidden"
    style={{ background: SHARED_BG }}
  >
    {/* Animated orbs */}
    <span className="absolute top-[10%] left-[8%] w-28 h-28 rounded-full bg-[#1ecbf6] opacity-20 blur-2xl animate-pulse pointer-events-none"></span>
    <span className="absolute bottom-[18%] right-[14%] w-36 h-36 rounded-full bg-[#94ffe6] opacity-20 blur-3xl animate-pulse pointer-events-none"></span>
    <span className="absolute top-[55%] left-[65%] w-20 h-20 rounded-full bg-[#b5eaff] opacity-20 blur-2xl animate-pulse pointer-events-none"></span>
    
    <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-orbitron font-extrabold text-neonblue neon-shadow text-center mb-14 tracking-wide">
        Where I've Worked
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {EXPERIENCES.map(({ img, alt, blurb, url }) => (
          <a
            href={url}
            key={alt}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden shadow-lg transition transform hover:-translate-y-2 hover:shadow-neon focus:outline-none"
            style={{ background: "rgba(0,0,0,0.20)" }}
          >
            <div className="relative w-full h-64 md:h-72">
              <img
                src={img}
                alt={alt}
                className={`w-full h-full ${
                  alt === "Western Law Group"
                    ? "object-contain bg-black"
                    : "object-cover"
                }`}
                style={
                  alt === "Western Law Group"
                    ? {
                        filter: "brightness(0.98) contrast(1.05)",
                        objectPosition: "center",
                      }
                    : { filter: "brightness(0.95) contrast(1.05)" }
                }
              />
              {/* Bottom overlay with blurb */}
              <div className="absolute bottom-0 left-0 w-full bg-[#050815]/80 bg-opacity-80 px-5 py-4 flex items-end rounded-b-2xl">
                <span className="text-neonblue font-orbitron font-bold text-lg drop-shadow-lg">
                  {blurb}
                </span>
              </div>
            </div>
            {/* Company Name overlay for accessibility */}
            <span className="sr-only">{alt}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
