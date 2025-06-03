import React, { useState, useEffect } from "react";

// ChevronUpIcon as before
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

const NavBar: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show arrow if user scrolled down 50px or more
      setShowArrow(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ...Hamburger menu code as before...

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#131642] bg-opacity-95 z-50 py-3 shadow-lg">
      <div className="relative flex items-center justify-between max-w-6xl mx-auto px-4">
        {/* Scroll to Top Icon - Far Left */}
        <div className="flex-shrink-0 transition-opacity duration-300"
             style={{ opacity: showArrow ? 1 : 0, pointerEvents: showArrow ? "auto" : "none" }}>
          <a
            href="#header"
            className="hover:bg-[#1ecbf6]/10 rounded-full p-1 transition"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ChevronUpIcon />
          </a>
        </div>

        {/* ...rest of your navbar code (hamburger, links) */}
      </div>
    </nav>
  );
};

export default NavBar;
