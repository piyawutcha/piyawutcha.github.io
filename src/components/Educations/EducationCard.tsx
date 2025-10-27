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
    <div className="w-full mb-10">
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-center">
        <div className="mr-4 flex justify-center items-center shrink-0 mb-2 md:mb-0">
          <img src={education.logo} alt={education.name} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-2 mb-2">
            <div>
              <h3 className="text-gray-900 text-lg md:text-2xl font-semibold leading-snug wrap-break-word">{education.degree}</h3>
            </div>
            <div className="md:text-right">
              <span className="text-primary font-semibold text-sm md:text-lg whitespace-nowrap">{education.year}</span>
            </div>
          </div>
          <p className="text-gray-800 text-base md:text-xl font-medium mb-2 wrap-break-word leading-snug">{education.name}</p>
          <p className="text-gray-600 text-sm md:text-lg wrap-break-word">{education.major}</p>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
