import React, { useState } from "react";

// Small, sharp, pointy chevron up icon (SVG)
const ChevronUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 15l6-6 6 6" stroke="#1ecbf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Hamburger and X icons (SVGs)
const HamburgerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <rect y="4" width="24" height="2.5" rx="1" fill="#1ecbf6"/>
    <rect y="11" width="24" height="2.5" rx="1" fill="#1ecbf6"/>
    <rect y="18" width="24" height="2.5" rx="1" fill="#1ecbf6"/>
  </svg>
);
const XIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M6 18L18 6" stroke="#1ecbf6" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on navigation (mobile)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#131642] bg-opacity-95 z-50 py-3 shadow-lg">
      <div className="relative flex items-center justify-between max-w-6xl mx-auto px-4">
        {/* Scroll to Top Icon - Far Left */}
        <div className="flex-shrink-0">
          <a
            href="#header"
            className="hover:bg-[#1ecbf6]/10 rounded-full p-1 transition"
            title="Scroll to Top"
          >
            <ChevronUpIcon />
          </a>
        </div>

        {/* Hamburger for mobile (hidden on md+) */}
        <button
          className="md:hidden ml-auto text-neonblue focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <XIcon /> : <HamburgerIcon />}
        </button>

        {/* Nav Links */}
        <ul
          className={`
            hidden md:flex gap-8 mx-auto
          `}
        >
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

        {/* Mobile Menu Overlay */}
        <ul
          className={`
            flex flex-col items-center gap-8 bg-[#131642] bg-opacity-100 py-10 px-8 rounded-b-xl absolute top-full left-0 w-full shadow-lg
            transition-all duration-300
            ${menuOpen ? "block" : "hidden"}
            md:hidden
          `}
        >
          {sections.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-neonblue font-orbitron text-xl px-2 hover:text-[#fff] transition"
                onClick={handleNavClick}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
