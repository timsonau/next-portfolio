import Experience from "./Experience";
import experiences from "../../public/data/experiencesData";
export default function Experiences() {
  return (
    <section id="Experience" className="pb-8">
      <h2 className="section-title">Experience</h2>
      {experiences.map((exp, index) => (
        <Experience
          key={index}
          name={exp.name}
          description={exp.description}
          dates={exp.dates}
        />
      ))}
    </section>
  );
}
