import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="py-2 max-[999px]:py-1.5 max-[767px]:py-1 w-[100%] sticky inset-0 z-30 top-0">
      <div className="relative flex items-center justify-between px-6 max-[999px]:px-5 max-[767px]:px-4 max-[443px]:px-3">
        {/* Company Logo/Name - Always visible */}
        <div className="flex-shrink-0 z-10">
          <h2 className="text-xl sm:text-2xl max-[999px]:text-xl max-[767px]:text-lg max-[443px]:text-base font-bold text-black">
            Code<span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">Quest</span>
          </h2>
        </div>

        {/* Desktop Navigation - Hidden on mobile < 444px */}
        <div className="flex-1 justify-center min-[677px]:flex hidden mr-[120px]">
          <SlideTabs />
        </div>

        {/* Mobile Menu Button - Only visible < 444px */}
        <div className="min-[677px]:hidden flex  items-center justify-end flex-shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 max-[999px]:p-1.5 max-[767px]:p-1.5 max-[443px]:p-1 rounded-lg bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 max-[999px]:w-5 max-[999px]:h-5 max-[767px]:w-5 max-[767px]:h-5 max-[443px]:w-4 max-[443px]:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Icon Buttons */}
        <div className="hidden min-[677px]:flex items-center gap-2 lg:gap-3 max-[999px]:gap-2 max-[767px]:gap-1.5 absolute right-2 sm:right-4 lg:right-6 max-[999px]:right-3 max-[767px]:right-2 top-1/2 transform -translate-y-1/2">
          <IconButton 
            icon="info" 
            onClick={() => console.log('Info clicked')}
            title="Information"
          />
          <IconButton 
            icon="github" 
            onClick={() => window.open('https://github.com', '_blank')}
            title="GitHub"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown - Only visible < 444px */}
      {isMobileMenuOpen && (
        <div className="min-[444px]:hidden absolute top-full left-0 right-0 bg-white  border-t-0 shadow-lg z-40">
          <div className="flex flex-col p-4 space-y-3">
            <MobileMenuItem onClick={() => setIsMobileMenuOpen(false)}>
              Collection
            </MobileMenuItem>
            <MobileMenuItem onClick={() => setIsMobileMenuOpen(false)}>
              Contribute
            </MobileMenuItem>
            <MobileMenuItem onClick={() => setIsMobileMenuOpen(false)}>
              Roadmap
            </MobileMenuItem>
            <MobileMenuItem onClick={() => setIsMobileMenuOpen(false)}>
              Login/SignUp
            </MobileMenuItem>
          </div>
        </div>
      )}
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex w-fit rounded-full border-2 border-black bg-white p-1 max-[999px]:p-1 max-[767px]:p-1.5"
    >
      <Tab setPosition={setPosition}>Collection</Tab>
      <Tab setPosition={setPosition}>Contribute</Tab>
      <Tab setPosition={setPosition}>Roadmap</Tab>
      <Tab setPosition={setPosition}>Login/SignUp</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 max-[999px]:px-3 max-[999px]:py-1.5 max-[767px]:px-2 max-[767px]:py-1 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base max-[999px]:md:px-4 max-[999px]:md:py-2.5 max-[767px]:md:px-3 max-[767px]:md:py-2"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 max-[999px]:h-7 max-[767px]:h-6 rounded-full bg-black md:h-12 max-[999px]:md:h-10 max-[767px]:md:h-9"
    />
  );
};

const IconButton = ({ icon, onClick, title }) => {
  const InfoIcon = () => (
    <svg 
      className="w-4 h-4 sm:w-5 sm:h-5 max-[999px]:w-4 max-[999px]:h-4 max-[767px]:w-3.5 max-[767px]:h-3.5" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
      />
    </svg>
  );

  const GitHubIcon = () => (
    <svg 
      className="w-4 h-4 sm:w-5 sm:h-5 max-[999px]:w-4 max-[999px]:h-4 max-[767px]:w-3.5 max-[767px]:h-3.5" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  return (
    <button
      onClick={onClick}
      title={title}
      className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 max-[999px]:w-8 max-[999px]:h-8 max-[767px]:w-7 max-[767px]:h-7 rounded-full bg-white border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      {icon === 'info' ? <InfoIcon /> : <GitHubIcon />}
    </button>
  );
};

const MobileMenuItem = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3 text-sm font-medium text-black bg-white border border-gray-200 rounded-lg hover:bg-black hover:text-white transition-all duration-200 transform hover:scale-[1.02]"
    >
      {children}
    </button>
  );
};