import { experiences } from '../utils/index'
import ExperienceCard from '../components/Experiences/ExperienceCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="bg-experience bg-cover bg-no-repeat py-10 flex justify-center items-center">
      <div className="w-3/4">
        <div className="text-white text-6xl font-extralight">
          Experiences
        </div>
        <div className="text-white w-full mt-4">
          {
            experiences.map(exp => {
              return (
                <ExperienceCard key={exp.id} experience={exp} />
              )
            })
          }
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="w-20 h-20 bg-main rounded-full flex justify-center items-center border-solid border-[2px] border-white mx-4 z-20 text-white text-5xl">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ExperiencesSection