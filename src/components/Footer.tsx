import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { contacts } from '../utils/index';

const Footer = () => {
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('data-target-id');
    if (targetId) {
      scrollToSectionWithOffset(targetId, 100);
    }
  }

  const scrollToSectionWithOffset = (elementId: string, offset = 100) => {
    const el = document.getElementById(elementId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-main border-t-4 border-contact">
      <div className="mx-auto w-full px-4 py-8 sm:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          
          {/* Left section - Branding */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-lg font-semibold text-primary">Piyawut C.</h3>
            <p className="text-sm text-light/70 text-center md:text-left">
              Full Stack Developer passionate about building scalable web applications
            </p>
          </div>

          {/* Center section - Social links */}
          <div className="flex flex-col items-center space-y-4">
            <h4 className="text-sm font-medium text-light/90 uppercase tracking-wider">Connect</h4>
            <div className="flex justify-center items-center gap-6">
              {contacts.map(contact => (
                <a 
                  key={contact.id}
                  href={contact.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FontAwesomeIcon 
                    icon={contact.icon as IconProp} 
                    className="relative text-2xl text-light/80 hover:text-primary transition-all duration-300 hover:scale-110" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right section - Quick links or additional info */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <h4 className="text-sm font-medium text-light/90 uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col items-center md:items-end space-y-2 text-sm">
              <span onClick={handleNavClick} data-target-id="cover" className="text-light/70 hover:text-primary transition-colors duration-200 cursor-pointer">Home</span>
              <span onClick={handleNavClick} data-target-id="about" className="text-light/70 hover:text-primary transition-colors duration-200 cursor-pointer">About</span>
              <span onClick={handleNavClick} data-target-id="educations" className="text-light/70 hover:text-primary transition-colors duration-200 cursor-pointer">Educations</span>
              <span onClick={handleNavClick} data-target-id="experiences" className="text-light/70 hover:text-primary transition-colors duration-200 cursor-pointer">Experiences</span>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 sm:my-8 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>

        {/* Bottom section - Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-light/60">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Piyawut C. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer