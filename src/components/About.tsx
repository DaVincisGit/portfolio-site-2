import React from "react";

// Shared background for both header and about
const SHARED_BG =
  "radial-gradient(ellipse at 80% 30%, rgba(30,203,246,0.10) 0%, transparent 50%), " +
  "radial-gradient(ellipse at 0% 100%, rgba(55,61,185,0.10) 0%, transparent 70%), " +
  "linear-gradient(135deg, #0c102a 70%, #050815 100%)";

// Icons as SVGs
const CloudIcon = () => (
  <svg className="inline align-middle mr-2" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M17 18a5 5 0 100-10 6 6 0 00-9.33 6.04A4 4 0 106 18h11z" stroke="#1ecbf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const DbIcon = () => (
  <svg className="inline align-middle mr-2" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="6" rx="8" ry="3.5" stroke="#b5eaff" strokeWidth="2"/>
    <path d="M4 6v7c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5V6" stroke="#b5eaff" strokeWidth="2"/>
    <path d="M4 13v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-5" stroke="#b5eaff" strokeWidth="2"/>
  </svg>
);
const AiIcon = () => (
  <svg className="inline align-middle mr-2" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="5" stroke="#94ffe6" strokeWidth="2"/>
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="#94ffe6" strokeWidth="2"/>
  </svg>
);
const PowerIcon = () => (
  <svg className="inline align-middle mr-2" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="7" y="2" width="10" height="7" rx="2" stroke="#ffd966" strokeWidth="2"/>
    <rect x="3" y="15" width="8" height="7" rx="2" stroke="#1ecbf6" strokeWidth="2"/>
    <rect x="13" y="15" width="8" height="7" rx="2" stroke="#b5eaff" strokeWidth="2"/>
  </svg>
);

const About: React.FC = () => (
  <section
    id="about"
    className="w-full py-24 flex justify-center items-center relative overflow-hidden"
    style={{
      background: SHARED_BG,
    }}
  >
    {/* Animated background orbs */}
    <span className="absolute top-[10%] left-[8%] w-28 h-28 rounded-full bg-[#1ecbf6] opacity-20 blur-2xl animate-pulse pointer-events-none"></span>
    <span className="absolute bottom-[18%] right-[14%] w-36 h-36 rounded-full bg-[#94ffe6] opacity-20 blur-3xl animate-pulse pointer-events-none"></span>
    <span className="absolute top-[55%] left-[65%] w-20 h-20 rounded-full bg-[#b5eaff] opacity-20 blur-2xl animate-pulse pointer-events-none"></span>

    <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
      <h2 className="text-4xl font-orbitron font-extrabold text-neonblue neon-shadow mb-6 tracking-wide">
        About Me
      </h2>
      <p className="text-lg md:text-xl text-[#b5eaff] font-mono leading-relaxed mb-6">
        I’m an AWS-Certified results-driven professional with 4 years of experience in SDLC processes and an engineering degree in Computer&nbsp;Science.
      </p>
      <div className="text-lg md:text-xl text-[#b5eaff] font-mono leading-relaxed mb-6 space-y-2">
        <div><CloudIcon />Proficient in AWS cloud services</div>
        <div><DbIcon />Relational databases (MySQL, SQL Server, Oracle)</div>
        <div><AiIcon />Skilled in AI/ML principles (supervised learning, LLMs), leveraging data for innovative solutions</div>
        <div><PowerIcon />Experienced in the Microsoft Power Platform (Power&nbsp;Apps, Power Automate, Power BI)</div>
      </div>
      <p className="text-lg md:text-xl text-[#b5eaff] font-mono leading-relaxed">
        I’m passionate about driving efficiency through data and technology in my career
        <span className="italic text-[#94ffe6] animate-customwiggle"> (and cars).</span>
      </p>
    </div>
  </section>
);

export default About;
