import React from "react";

// Small, sharp, pointy chevron up icon (SVG)
const ChevronUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 15l6-6 6 6" stroke="#1ecbf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const NavBar: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full bg-[#131642] bg-opacity-95 z-50 flex items-center py-3 shadow-lg">
    {/* Scroll to Top Icon - Far Left */}
    <div className="absolute left-4 top-1/2 -translate-y-1/2">
      <a
        href="#header"
        className="hover:bg-[#1ecbf6]/10 rounded-full p-1 transition"
        title="Scroll to Top"
      >
        <ChevronUpIcon />
      </a>
    </div>
    {/* Centered nav links */}
    <div className="flex-grow flex justify-center">
      <ul className="flex gap-8">
        {sections.map(section => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-neonblue font-orbitron text-lg px-2 hover:text-[#fff] transition"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default NavBar;
