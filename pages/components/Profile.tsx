import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
export default function Profile() {
  return (
    <section
      id="Profile"
      className="drop-shadow-2xl pt-24 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white"
    >
      <h2 className="name text-4xl font-semibold text-center p-2">
        Heeyooon Son
      </h2>
      <div className="pic flex justify-center">
        <a href="#" className="p-2 drop-shadow-2xl">
          <img
            alt="profile"
            src="images/grad-photo.jpg"
            className="object-cover rounded-full h-48 w-48 drop-shadow-2xl"
          />
        </a>
      </div>

      <p className="intro text-center p-2 text-lg">
        Writing code is simple, but writing simple code is hard.
      </p>
      <div className="resume justify-center p-2 gap-1 flex">
        <h3 className="text-sm">Resume</h3>
        <a href="files/Resume.pdf" className="self-center">
          <AiOutlineDownload size={20} />
        </a>
      </div>
    </section>
  );
}
