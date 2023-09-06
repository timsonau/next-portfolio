import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
export default function Footer() {
  return (
    <footer id="Contact" className="">
      <div className="container pt-9">
        <div className="socials-wrapper">
          <a href="mailto:heeyoon.timson@gmail.com" className="social-icon">
            <AiFillMail size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/tim-son/"
            className="social-icon"
          >
            <AiFillLinkedin size={30} />
          </a>
          <a href="https://github.com/timsonau" className="social-icon">
            <AiFillGithub size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
