import { AiOutlineInfo, AiFillGithub, AiFillPlayCircle } from "react-icons/ai";
interface ProjectItemProps {
  img: string;
  prjSrc?: string;
  codeSrc?: string;
  infoSrc?: string;
  description: string;
  name: string;
}

export default function ProjectItem(props: ProjectItemProps) {
  const playButton = props.prjSrc
    ? "<a href={props.codeSrc}><AiFillGithub size={30} /></a>"
    : "";

  return (
    <div className="project-item relative md:w-52 w-60 drop-shadow-md">
      <div className="relative block md:w-52 md:h-52 w-60 h-60 group transition-opacity ease-in-out duration-300">
        <img
          alt="profile"
          src={`images/${props.img}`}
          className="rounded-t-2xl  h-full w-full group-hover:opacity-20 transition-opacity ease-in-out duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 ">
          {props.prjSrc ? (
            <a href={props.prjSrc}>
              <AiFillPlayCircle size={30} />
            </a>
          ) : (
            ""
          )}
          {props.codeSrc ? (
            <a href={props.codeSrc}>
              <AiFillGithub size={30} />
            </a>
          ) : (
            ""
          )}
          {props.infoSrc ? (
            <a href={props.infoSrc}>
              <AiOutlineInfo size={30} />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="text-white bg-gradient-to-r from-indigo-400 to-cyan-400 lower rounded-b-2xl md:w-52 w-60 mx-auto text-center px-2 py-2 h-40 drop-shadow-2xl">
        <h2 className="text-s font-semibold text-center pb-2">{props.name}</h2>
        <p className="text-xs">{props.description}</p>
      </div>
    </div>
  );
}
