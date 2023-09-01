import ProjectItem from "./ProjectItem";
import projects from "../data/projectsData";
export default function Projects() {
  return (
    <section id="Projects" className="pb-8">
      <h2 className="text-center text-4xl p-4 text-gray-800">Projects</h2>

      <div className="project-items p-6 flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            img={project.img}
            prjSrc={project.prjSrc}
            codeSrc={project.codeSrc}
            infoSrc={project.infoSrc}
            description={project.description}
            name={project.name}
          />
        ))}
      </div>
    </section>
  );
}
