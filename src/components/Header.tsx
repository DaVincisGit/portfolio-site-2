import React from "react";

// Shared background for both header and about
const SHARED_BG =
  "radial-gradient(ellipse at 80% 30%, rgba(30,203,246,0.10) 0%, transparent 50%), " +
  "radial-gradient(ellipse at 0% 100%, rgba(55,61,185,0.10) 0%, transparent 70%), " +
  "linear-gradient(135deg, #0c102a 70%, #050815 100%)";

const Header: React.FC = () => (
  <section
    id="header"
    className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden"
    style={{
      background: SHARED_BG,
    }}
  >
    {/* Animated background orbs */}
    <span className="absolute top-[10%] left-[8%] w-28 h-28 rounded-full bg-[#1ecbf6] opacity-20 blur-2xl animate-pulse pointer-events-none"></span>
    <span className="absolute bottom-[18%] right-[14%] w-36 h-36 rounded-full bg-[#94ffe6] opacity-20 blur-3xl animate-pulse pointer-events-none"></span>
    <span className="absolute top-[55%] left-[65%] w-20 h-20 rounded-full bg-[#b5eaff] opacity-20 blur-2xl animate-pulse pointer-events-none"></span>

    <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
      {/* Image Section - rectangle, vertically centered, moved up */}
      <div className="flex-1 flex justify-start items-center min-w-[200px] -mt-12 md:-mt-16">
        <div className="relative flex justify-center items-center">
          {/* Blue Aura Glow - rectangle */}
          <div className="absolute w-[220px] h-[220px] rounded-2xl bg-[#1ecbf6] opacity-30 blur-[70px] z-0"></div>
          <img
            src="/images/headshot.jpg"
            alt="Anthony Thomas"
            className="w-[200px] h-[200px] rounded-2xl object-cover relative z-10"
            style={{ filter: "drop-shadow(0 0 32px #1ecbf6)" }}
          />
        </div>
      </div>
      {/* Text Section */}
      <div className="flex-[2] text-left flex flex-col justify-center">
        <div className="mb-2 flex flex-col">
          <span className="text-2xl font-mono font-semibold text-[#94ffe6] tracking-wider mb-1">
            Hi, I'm
          </span>
          <span className="text-6xl lg:text-7xl font-orbitron font-extrabold text-neonblue neon-shadow tracking-wide whitespace-nowrap animate-pulse">
            Anthony Thomas
          </span>
        </div>
        <p className="text-lg text-[#fff] font-mono italic mt-6 mb-6">
          and I turn curiosity into code.
        </p>
        <p className="text-base lg:text-lg text-[#b5eaff] mb-8 font-semibold whitespace-nowrap">
          Data Engineer&nbsp;|&nbsp;Automation Solutions Engineer&nbsp;|&nbsp;Generative AI Specialist
        </p>
        <div className="flex flex-row items-center gap-4 mt-2">
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
