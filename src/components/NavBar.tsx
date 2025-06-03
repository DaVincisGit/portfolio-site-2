import React, { useState, useEffect } from "react";

// ChevronUpIcon as before
const ChevronUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 15l6-6 6 6" stroke="#1ecbf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
    <rect x="3" y="6" width="18" height="2" rx="1" fill="#1ecbf6"/>
    <rect x="3" y="11" width="18" height="2" rx="1" fill="#1ecbf6"/>
    <rect x="3" y="16" width="18" height="2" rx="1" fill="#1ecbf6"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
    <path d="M6 6l12 12M6 18L18 6" stroke="#1ecbf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const NavBar: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide/show scroll-to-top arrow on scroll
  useEffect(() => {
    const onScroll = () => setShowArrow(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on link click
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#131642] bg-opacity-95 z-50 py-3 shadow-lg">
      <div className="relative flex items-center justify-between max-w-6xl mx-auto px-4">
        {/* Scroll to Top Icon - Far Left */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2"
             style={{
               opacity: showArrow ? 1 : 0,
               pointerEvents: showArrow ? "auto" : "none",
               transition: "opacity 0.3s"
             }}>
          <a
            href="#header"
            className="hover:bg-[#1ecbf6]/10 rounded-full p-1 transition"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ChevronUpIcon />
          </a>
        </div>

        {/* Centered nav links (desktop) */}
        <div className="flex-grow flex justify-center">
          <ul className="hidden md:flex gap-8">
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

        {/* Hamburger menu button (mobile) */}
        <button
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-50 p-1 rounded hover:bg-[#1ecbf6]/10"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Mobile menu (full screen overlay) */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[#131642]/95 flex flex-col justify-center items-center z-40">
            <ul className="flex flex-col gap-8">
              {sections.map(section => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-neonblue font-orbitron text-3xl px-2 hover:text-[#fff] transition"
                    onClick={handleNavClick}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
