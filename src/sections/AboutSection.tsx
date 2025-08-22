import about_img from '../assets/aboutme.jpg'

const AboutSection = () => {
  return (
    <section id="about" className="bg-main py-10 flex justify-center items-center">
      <div className="flex justify-between w-3/4 gap-10">
        <div className="w-1/2 text-white">
          <div className="text-6xl font-extralight">About</div>
          <div className="text-lg font-extralight mt-2">
            Experienced and adaptable Full Stack Developer with a strong track record of designing and delivering
            scalable, high-performance web application using various technologies. Skilled across both front-end and
            back-end development, with a focus on problem solving, clean architecture, and maintainable code.
            <br/><br/>
            Equally eﬀective working independently or in cross-functional teams, with a passion for continuous learning and
            applying new tools to solve real-world challenges.
            <br/><br/>
            Eager to contribute technical expertise and hands-on experience to drive product innovation and business growth.
          </div>
        </div>
        <div className="w-1/2">
          <img src={about_img} alt="about" />
        </div>
      </div>
    </section>
  )
}
export default AboutSection