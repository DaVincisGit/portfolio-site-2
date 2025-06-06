import React, { useState } from "react";

// Shared background
const SHARED_BG =
  "radial-gradient(ellipse at 80% 30%, rgba(30,203,246,0.10) 0%, transparent 50%), " +
  "radial-gradient(ellipse at 0% 100%, rgba(55,61,185,0.10) 0%, transparent 70%), " +
  "linear-gradient(135deg, #0c102a 70%, #050815 100%)";

// Your skills data
const skills = [
  { label: "Python, SQL, PySpark, TypeScript, PowerFx" },
  { label: "AWS: S3, EC2, Lambda, Glue, Redshift, SQS, SNS, SES" },
  { label: "ETL, Data Pipeline Design, CI/CD" },
  { label: "Testing and Debugging" },
  { label: "Version Control" },
  { label: "Power BI, Tableau, Excel" },
  { label: "Jira, ServiceNow" },
  { label: "Generative AI (LLMs, RAG, Bedrock, LangChain)" },
];

const Skills: React.FC = () => {
  const [jigglingIdx, setJigglingIdx] = useState<number | null>(null);

  const handleJiggle = (idx: number) => {
    setJigglingIdx(idx);
    setTimeout(() => setJigglingIdx(null), 600); // Animation duration
  };

  return (
    <section
      id="skills"
      className="w-full py-24 flex flex-col justify-center items-center relative overflow-hidden"
      style={{ background: SHARED_BG }}
    >
      {/* Animated orbs */}
      <span className="absolute top-[10%] left-[8%] w-28 h-28 rounded-full bg-[#1ecbf6] opacity-20 blur-2xl animate-pulse pointer-events-none"></span>
      <span className="absolute bottom-[18%] right-[14%] w-36 h-36 rounded-full bg-[#94ffe6] opacity-20 blur-3xl animate-pulse pointer-events-none"></span>
      <span className="absolute top-[55%] left-[65%] w-20 h-20 rounded-full bg-[#b5eaff] opacity-20 blur-2xl animate-pulse pointer-events-none"></span>

      <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
        <h2 className="text-4xl font-orbitron font-extrabold text-neonblue neon-shadow mb-12 tracking-wide">
          What's in my toolbelt
        </h2>
        <ul className="flex flex-col gap-4 text-lg md:text-xl text-[#b5eaff] font-mono font-semibold items-center">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              tabIndex={0}
              role="button"
              aria-label={skill.label}
              onClick={() => handleJiggle(idx)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleJiggle(idx); }}
              className={
                `bg-[#0c102ae6] border border-[#1ecbf6] rounded-xl px-6 py-3 shadow-md hover:shadow-neon transition cursor-pointer outline-none 
                ${jigglingIdx === idx ? "animate-jiggle" : ""}`
              }
              style={{
                minWidth: "250px",
                maxWidth: "90%",
                margin: "0 auto",
                textAlign: "center",
                userSelect: "none",
              }}
            >
              {skill.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
