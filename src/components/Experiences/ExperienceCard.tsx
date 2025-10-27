import { useRef, useEffect, useState } from 'react';

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
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };

    // Initial measurement
    updateHeight();

    // Add resize listener
    window.addEventListener('resize', updateHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [experience]);

  let left = experience.id % 2 != 0;
  return (
    <div className="text-center z-0 relative" style={{ height: contentHeight > 0 ? `${contentHeight + 40}px` : undefined }}>

      <div ref={contentRef} className={"w-auto md:w-[calc(50%-60px)] absolute bg-main rounded-xl p-4 text-left top-2 ml-24 md:ml-0 " + (left ? "exp_details_left" : "md:right-0 exp_details_right")}>
        <div className="text-primary">
          <span className="font-semibold">{experience.name}</span><span className="text-sm italic"> - {experience.location}</span>
        </div>
        <div className="mt-2 text-sm font-medium text-primary">
          {experience.position}
        </div>
        <div className="mt-2 text-sm font-light">
          {experience.duration}
        </div>

        <div className="mt-2 text-xs font-extralight">
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

      <div className="w-full flex md:justify-center items-center">
        <div className="w-20 h-20 bg-main rounded-full flex justify-center items-center border-solid border-2 border-white md:mx-4 z-20">
          <img src={experience.logo} alt={experience.name} className="w-3/4 rounded-full" />
        </div>
      </div>
      <div className="w-[5px] h-full bg-white relative ml-9 md:m-auto -top-5 z-10"></div>
    </div>
  )
}

export default ExperienceCard