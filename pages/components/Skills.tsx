import ProjectItem from "./ProjectItem";
import skills from "../../public/data/skillsData";
import Skill from "./Skill";
export default function Skills() {
  return (
    <section id="Skills" className="pb-8">
      <h2 className="section-title text-center text-3xl p-4 font-semibold">
        Skills
      </h2>
      <div className="skills-grid ">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} img={skill.img} />
        ))}
      </div>
    </section>
  );
}
