import about_img from '../assets/aboutme.jpg'

const AboutSection = () => {
  return (
    <section id="about" className="bg-main py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-primary">About</h2>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          {/* Text content */}
          <div className="w-full md:w-1/2 text-light">
            <div className="mt-4 text-base sm:text-lg font-extralight leading-relaxed text-light/90">
              <p>
                Experienced and adaptable Full Stack Developer with a strong track record of designing and delivering
                scalable, high-performance web applications using various technologies. Skilled across both front-end and
                back-end development, with a focus on problem solving, clean architecture, and maintainable code.
              </p>
              <p className="mt-4">
                Equally effective working independently or in cross-functional teams, with a passion for continuous learning and
                applying new tools to solve real-world challenges.
              </p>
              <p className="mt-4">
                Eager to contribute technical expertise and hands-on experience to drive product innovation and business growth.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-white/10">
              <img src={about_img} alt="About" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection