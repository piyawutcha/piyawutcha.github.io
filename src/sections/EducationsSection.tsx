import EducationCard from '../components/Educations/EducationCard'
import { educations } from '../utils/index'

const EducationsSection = () => {
  return (
    <section className="bg-white py-10 flex justify-center items-center">
      <div className="w-3/4 flex flex-col">
        <div className="text-6xl font-extralight">
          Education
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