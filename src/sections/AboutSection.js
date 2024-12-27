import React from 'react'
import about_img from '../assets/aboutme.jpg'

const AboutSection = () => {
  return (
    <section className="bg-main py-10 flex justify-center items-center">
      <div className="flex justify-between w-3/4 gap-10">
        <div className="w-1/2 text-white">
          <div className="text-6xl font-extralight">About</div>
          <div className="text-lg font-extralight mt-2">
            Highly skilled full stack developer with the experience of designing and implementing web applications in various technologies.
            Proficient in both front end and back end development.
            <br/><br/>
            Strong problem solving and analytical skills.
            Team player who can also work independently with the enthusiasm to learn a new thing.
            <br/><br/>
            Adept at working collaboratively with cross-functional teams to develop innovative solutions.
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