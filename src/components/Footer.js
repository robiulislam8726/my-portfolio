import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-950/70 border-t border-purple-400/20 py-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ROBIUL ISLAM. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-primary/40 hover:bg-primary 
            flex items-center justify-center text-white transition hover:scale-110"
            aria-label="Back to top"
          >
            {/* SVG arrow (NO icon library needed) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
