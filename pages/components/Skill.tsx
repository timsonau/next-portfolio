interface SkillProps {
  img: string;
  name: string;
}

export default function Skill(props: SkillProps) {
  return (
    <a className="skill">
      <img
        src={`images/${props.img}`}
        alt={props.name}
        className={`${props.name} transition-transform duration-75 w-[90%] h-[90%] hover:scale-125 shadow-2xl rounded-sm p-8`}
      />
    </a>
  );
}
