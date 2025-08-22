import logo_img from '../../assets/logo.png';

const Header = () => {

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
    <header className="w-[98%] p-2 px-5 flex items-center justify-between fixed top-5 mx-[1%] rounded-full bg-gray-600/60 text-dark z-50 animate-rolling">
      <div>
        <a href="/">
          <div className="flex items-center">
            <div className="w-12 rounded-full overflow-hidden">
              <img src={logo_img} alt="piyawutcha.github.io" className="w-full h-auto rounded-full" />
            </div>
            <div className="font-semibold text-2xl ml-1">
              Piyawut C.
            </div>
          </div>
        </a>
      </div>
      <div>
        <nav>
          <span onClick={handleNavClick} data-target-id="cover" className="mr-6 font-semibold cursor-pointer hover:text-light">Home</span>
          <span onClick={handleNavClick} data-target-id="about" className="mr-6 font-semibold cursor-pointer hover:text-light">About</span>
          <span onClick={handleNavClick} data-target-id="educations" className="mr-6 font-semibold cursor-pointer hover:text-light">Educations</span>
          <span onClick={handleNavClick} data-target-id="experiences" className="mr-6 font-semibold cursor-pointer hover:text-light">Experiences</span>
        </nav>
      </div>
    </header>
  )
}
export default Header