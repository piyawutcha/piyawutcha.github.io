import { useState } from 'react';
import logo_img from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('data-target-id');
    if (targetId) {
      scrollToSectionWithOffset(targetId, 100);
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSectionWithOffset = (elementId: string, offset = 100) => {
    const el = document.getElementById(elementId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="w-[98%] p-2 px-5 flex items-center justify-between fixed top-5 mx-[1%] rounded-full bg-gray-600/60 text-dark z-50 animate-rolling">
      <div>
        <a href="/">
          <div className="flex items-center group">
            <div className="w-12 rounded-full overflow-hidden">
              <img src={logo_img} alt="piyawutcha.github.io" className="w-full h-auto rounded-full" />
            </div>
            <div className="font-semibold text-2xl ml-1 bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0px_3px] group-hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              Piyawut C.
            </div>
          </div>
        </a>
      </div>
      
      {/* Desktop Navigation - hidden on mobile */}
      <div className="hidden md:block">
        <nav>
          <span onClick={handleNavClick} data-target-id="cover" className="mr-6 font-semibold cursor-pointer hover:text-primary">Home</span>
          <span onClick={handleNavClick} data-target-id="about" className="mr-6 font-semibold cursor-pointer hover:text-primary">About</span>
          <span onClick={handleNavClick} data-target-id="educations" className="mr-6 font-semibold cursor-pointer hover:text-primary">Educations</span>
          <span onClick={handleNavClick} data-target-id="experiences" className="mr-6 font-semibold cursor-pointer hover:text-primary">Experiences</span>
        </nav>
      </div>

      {/* Hamburger Menu Button - visible only on mobile */}
      <div className="md:hidden">
        <button 
          onClick={toggleMobileMenu}
          className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-dark mb-1 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-dark mb-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg md:hidden">
          <nav className="flex flex-col p-4">
            <span onClick={handleNavClick} data-target-id="cover" className="py-3 font-semibold cursor-pointer hover:text-primary border-b border-gray-700 text-light">Home</span>
            <span onClick={handleNavClick} data-target-id="about" className="py-3 font-semibold cursor-pointer hover:text-primary border-b border-gray-700 text-light">About</span>
            <span onClick={handleNavClick} data-target-id="educations" className="py-3 font-semibold cursor-pointer hover:text-primary border-b border-gray-700 text-light">Educations</span>
            <span onClick={handleNavClick} data-target-id="experiences" className="py-3 font-semibold cursor-pointer hover:text-primary text-light">Experiences</span>
          </nav>
        </div>
      )}
    </header>
  )
}
export default Header
