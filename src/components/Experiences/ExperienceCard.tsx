interface ExperienceProps {
  experience: {
    id: number;
    name: string;
    location: string;
    position: string;
    duration: string;
    description: string[];
    logo: any
  }
}

const ExperienceCard = (props: ExperienceProps) => {
  const { experience } = props;


  let left = experience.id % 2 != 0;
  return (
    <div className="text-center h-52 z-0 relative">

      <div className={"exp_details absolute bg-main rounded-xl p-4 text-left top-2 " + (left ? "exp_details_left" : "right-0 exp_details_right")}>
        <div className="">
          <span className="font-semibold">{experience.name}</span><span className="text-sm italic"> - {experience.location}</span>
        </div>
        <div className="mt-2 text-sm">
          {experience.position}
        </div>
        <div className="mt-2 text-sm">
          {experience.duration}
        </div>

        <div className="mt-2 text-xs">
          <ul>
          {
            experience.description.map((desc, index) => {
              return (
                <li key={index} className={"list-disc ml-3 " + (experience.description.length == index + 1 ? "" : "mb-2")} >{desc}</li>
              )
            })
          }
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-20 h-20 bg-main rounded-full flex justify-center items-center border-solid border-[2px] border-white mx-4 z-20">
          <img src={experience.logo} alt={experience.name} className="w-3/4 rounded-full" />
        </div>
      </div>
      <div className="w-[5px] h-4/5 bg-white relative m-auto top-[-20px] z-10"></div>
    </div>
  )
}

export default ExperienceCard