import React from "react";

const SHARED_BG =
  "radial-gradient(ellipse at 80% 30%, rgba(30,203,246,0.10) 0%, transparent 50%), " +
  "radial-gradient(ellipse at 0% 100%, rgba(55,61,185,0.10) 0%, transparent 70%), " +
  "linear-gradient(135deg, #0c102a 70%, #050815 100%)";

const EmailIcon = () => (
  <svg
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 24 24"
    className="inline align-middle mr-2"
    style={{ filter: "drop-shadow(0 0 6px #1ecbf6)" }}
  >
    <rect width="24" height="24" rx="4" fill="transparent" />
    <path
      d="M4 8l8 5 8-5"
      stroke="#1ecbf6"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect
      x="4"
      y="6"
      width="16"
      height="12"
      rx="2"
      stroke="#1ecbf6"
      strokeWidth="2"
    />
  </svg>
);

const Contact: React.FC = () => (
  <section
    id="contact"
    className="w-full py-24 flex flex-col justify-center items-center relative overflow-hidden"
    style={{ background: SHARED_BG }}
  >
    {/* Animated orbs */}
    <span className="absolute top-[10%] left-[8%] w-28 h-28 rounded-full bg-[#1ecbf6] opacity-20 blur-2xl animate-pulse pointer-events-none"></span>
    <span className="absolute bottom-[18%] right-[14%] w-36 h-36 rounded-full bg-[#94ffe6] opacity-20 blur-3xl animate-pulse pointer-events-none"></span>
    <span className="absolute top-[55%] left-[65%] w-20 h-20 rounded-full bg-[#b5eaff] opacity-20 blur-2xl animate-pulse pointer-events-none"></span>

    <div className="max-w-2xl mx-auto text-center px-6 relative z-10">
      <h2 className="text-4xl font-orbitron font-extrabold text-neonblue neon-shadow mb-7 tracking-wide">
        Contact Me
      </h2>
      <p className="text-lg md:text-xl text-[#b5eaff] font-mono mb-5">
        Interested in working together or have a project in&nbsp;mind? <br className="hidden md:block" />Let’s connect!
      </p>
      <div className="mb-6">
        <span className="text-xl text-[#b5eaff] font-sans font-bold flex items-center justify-center break-all">
          <EmailIcon />
          athoma3928@gmail.com
        </span>
      </div>
      <a
        href="https://www.linkedin.com/in/anthonythomas3928/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-transparent border border-neonblue text-neonblue px-6 py-2 rounded-lg hover:bg-neonblue hover:text-black font-orbitron font-bold text-lg transition shadow hover:shadow-neon"
        style={{ minWidth: 200 }}
      >
        Visit my LinkedIn
      </a>
    </div>
  </section>
);

export default Contact;
