interface ExperienceProp {
  name: string;
  dates: string;
  description: string;
}

export default function Experience(props: ExperienceProp) {
  return (
    <div className="experience-row">
      <div className="outline-wrap">
        <div className="experience-box">
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
