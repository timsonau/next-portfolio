interface ExperienceProp {
  name: string;
  dates: string;
  description: string;
}

export default function Experience(props: ExperienceProp) {
  return (
    <div className="experience-row p-6 flex flex-wrap justify-center gap-6">
      <div className="outline-wrap  flex-shrink-0 flex justify-center items-center bg-gradient-to-r from-indigo-400 to-cyan-400  rounded-2xl 2xl:w-[45%] w-full sm:mb-0">
        <div className="experience-box p-4 2xl:w-[98%] 2xl:h-[90%] h-[94%] w-[98%] bg-white rounded-2xl">
          <div className="title flex justify-between">
            <h3 className="font-semibold">{props.name}</h3>
            <h3 className="text-xs self-center">{props.dates}</h3>
          </div>
          <div className="info">
            <p className="text-sm p-4">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
