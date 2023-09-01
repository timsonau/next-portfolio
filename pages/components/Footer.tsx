import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
export default function Footer() {
  return (
    <footer
      id="Contact"
      className="flex flex-col items-center bg-gradient-to-r from-fuchsia-400 to-cyan-600 text-center text-white"
    >
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <a
            href="mailto:heeyoon.timson@gmail.com"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <AiFillMail size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/tim-son/"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <AiFillLinkedin size={30} />
          </a>
          <a
            href="https://github.com/timsonau"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <AiFillGithub size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
