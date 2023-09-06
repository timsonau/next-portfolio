import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
export default function Profile() {
  return (
    <section id="Profile" className="">
      <h2 className="name text-4xl font-semibold text-center p-2">
        Heeyooon Son
      </h2>
      <div className="profile-pic flex justify-center drop-shadow-2xl p-2">
        <img
          alt="profile"
          src="images/grad-photo.jpg"
          className="object-cover rounded-full h-48 w-48 drop-shadow-2xl"
        />
      </div>

      <p className="intro text-center p-2 lg:text-lg text-base">
        Writing code is simple, but writing simple code is hard.
      </p>
      <div className="resume justify-center p-2 gap-1 flex">
        <h3 className="lg:text-lg text-base">Resume</h3>
        <a href="files/Resume.pdf" className="self-center">
          <AiOutlineDownload size={30} />
        </a>
      </div>
    </section>
  );
}
