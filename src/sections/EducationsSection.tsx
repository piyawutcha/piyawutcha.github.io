import EducationCard from '../components/Educations/EducationCard'
import { educations } from '../utils/index'

const EducationsSection = () => {
  return (
    <section id="educations" className="bg-white py-10 flex justify-center items-center">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-3xl sm:text-4xl md:text-5xl font-light text-primary">
          Educations
        </div>
        <div className="mt-6">
          {
            educations.map(education => {
              return (
                <EducationCard key={education.id} education={education} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
export default EducationsSection