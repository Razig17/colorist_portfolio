import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#121212]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')} 
          className="text-white text-2xl font-bold hover:text-[#00e5ff] transition-colors"
        >
          <span className="text-[#00e5ff]">COLOR</span>IST
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('work')} 
            className="text-white hover:text-[#00e5ff] transition-colors"
          >
            WORK
          </button>
          <button 
            onClick={() => scrollToSection('instagram')} 
            className="text-white hover:text-[#00e5ff] transition-colors"
          >
            INSTAGRAM
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-[#00e5ff] transition-colors"
          >
            CONTACT
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
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
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121212] absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('work')} 
              className="text-white hover:text-[#00e5ff] transition-colors py-2 text-left"
            >
              WORK
            </button>
            <button 
              onClick={() => scrollToSection('instagram')} 
              className="text-white hover:text-[#00e5ff] transition-colors py-2 text-left"
            >
              INSTAGRAM
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white hover:text-[#00e5ff] transition-colors py-2 text-left"
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
