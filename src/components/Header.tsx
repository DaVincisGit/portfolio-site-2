import React from "react";

const SHARED_BG =
  "radial-gradient(ellipse at 80% 30%, rgba(30,203,246,0.10) 0%, transparent 50%), " +
  "radial-gradient(ellipse at 0% 100%, rgba(55,61,185,0.10) 0%, transparent 70%), " +
  "linear-gradient(135deg, #0c102a 70%, #050815 100%)";

const Header: React.FC = () => (
  <section
    id="header"
    className="
      relative min-h-screen flex flex-col justify-center items-center
      pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden
    "
    style={{ background: SHARED_BG }}
  >
    {/* Orbs (unchanged) */}
    <span className="absolute top-[10%] left-[8%] w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#1ecbf6] opacity-20 blur-2xl animate-pulse pointer-events-none"></span>
    <span className="absolute bottom-[18%] right-[14%] w-24 h-24 md:w-36 md:h-36 rounded-full bg-[#94ffe6] opacity-20 blur-3xl animate-pulse pointer-events-none"></span>
    <span className="absolute top-[55%] left-[65%] w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#b5eaff] opacity-20 blur-2xl animate-pulse pointer-events-none"></span>

    <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative z-10">
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center min-w-[120px] md:min-w-[200px] -mt-8 md:-mt-16">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[130px] h-[130px] md:w-[220px] md:h-[220px] rounded-2xl bg-[#1ecbf6] opacity-30 blur-[40px] md:blur-[70px] z-0"></div>
          <img
            src="/images/headshot.jpg"
            alt="Anthony Thomas"
            className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-2xl object-cover relative z-10"
            style={{ filter: "drop-shadow(0 0 32px #1ecbf6)" }}
          />
        </div>
      </div>
      {/* Text Section */}
      <div className="flex-[2] text-center md:text-left flex flex-col justify-center">
        <div className="mb-2 flex flex-col items-center md:items-start">
          <span className="text-lg md:text-2xl font-mono font-semibold text-[#94ffe6] tracking-wider mb-1">
            Hi, I'm
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-extrabold text-neonblue neon-shadow tracking-wide whitespace-nowrap animate-pulse">
            Anthony Thomas
          </span>
        </div>
        <p className="text-base md:text-lg text-[#fff] font-mono italic mt-3 md:mt-6 mb-4 md:mb-6">
          and I turn curiosity into code.
        </p>
        <div>
  {/* Desktop */}
  <p className="hidden md:block text-base lg:text-lg text-[#b5eaff] mb-8 font-semibold whitespace-nowrap">
    Data Engineer&nbsp;|&nbsp;Automation Solutions Engineer&nbsp;|&nbsp;Generative AI Specialist
  </p>
  {/* Mobile */}
  <div className="flex flex-col md:hidden text-base text-[#b5eaff] mb-8 font-semibold items-center gap-1">
    <span>Data Engineer</span>
    <span>Automation Solutions Engineer</span>
    <span>Generative AI Specialist</span>
  </div>
</div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-5 items-center md:items-start">
  <button
    type="button"
    onClick={() => {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="inline-block bg-transparent border border-neonblue text-neonblue px-4 py-1.5 rounded hover:bg-neonblue hover:text-black transition font-mono font-semibold"
    style={{ minWidth: 130 }}
  >
    Work with Me
  </button>
  <a
    href="/Anthony_Thomas_Resume_6_3.pdf"
    className="inline-block bg-transparent border border-neonblue text-neonblue px-4 py-1.5 rounded hover:bg-neonblue hover:text-black transition font-mono font-semibold"
    download
  >
    Download Resume
  </a>
</div>

      </div>
    </div>
  </section>
);

export default Header;
