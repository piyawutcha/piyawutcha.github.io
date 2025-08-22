interface EducationProps {
  education: {
    id: number
    logo: any;
    name: string;
    degree: string;
    major: string;
    year: string;
  }
}

const EducationCard = (props: EducationProps) => {
  const { education } = props;

  return (
    <div className="w-full px-14 py-5 border-black border-solid border-[4px] rounded-3xl flex justify-between mb-8">
      <div className="w-2/12">
        <img src={education.logo} alt={education.name} className="w-32" />
      </div>
      <div className="w-10/12">
        <div className="font-semibold text-xl">
          {education.name}
        </div>
        <div className="font-light text-lg mt-1">
          {education.degree}
        </div>
        <div className="font-light text-lg mt-1">
          {education.major}
        </div>
        <div className="font-extralight text-gray-700 text-sm mt-1">
          {education.year}
        </div>
      </div>
    </div>
  )
}

export default EducationCard