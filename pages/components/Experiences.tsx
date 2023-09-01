export default function Experiences() {
  return (
    <section id="Experience" className="pb-8">
      <h2 className="text-center text-4xl p-4 ">Experience</h2>
      <div className="p-6 rows flex flex-wrap justify-center gap-6">
        <div className="outline-wrap flex-shrink-0 flex justify-center items-center bg-gradient-to-r from-fuchsia-300 to-cyan-300 rounded-2xl  2xl:w-[45%] w-full sm:mb-0">
          <div className="experience UDA p-4 2xl:w-[98%] 2xl:h-[90%] h-[94%] w-[98%] bg-white rounded-2xl">
            <div className="title flex justify-between">
              <h3 className="">UDA Technologies</h3>
              <h3 className="text-xs">05/2021 - 08/2022</h3>
            </div>
            <div className="info">
              <p className="text-sm p-4">
                Worked as a Full Stack Developer on UDA&apos;s flagship product
                Construction Online, a cloud based consturction management
                software used by over 850,000 pros. Led the OnPoint proposal
                project, an intuitive customizable bid proposal widget featured
                at the International Builders Show 2023 with a dynamic preview
                option.
              </p>
            </div>
          </div>
        </div>
        <div className="outline-wrap flex-shrink-0 flex justify-center items-center bg-gradient-to-r from-cyan-300 to-fuchsia-300 rounded-2xl 2xl:w-[45%] w-full sm:mb-0">
          <div className="experience Auburn University p-4 2xl:w-[98%] 2xl:h-[90%] h-[94%] w-[98%] bg-white rounded-2xl">
            <div className="title flex justify-between">
              <h3 className="">Auburn University</h3>
              <h3 className="text-xs">08/2019 - 05/2023</h3>
            </div>
            <div className="info">
              <p className="text-sm p-4">
                Graduated Summa Cum Laude from Auburn University with
                Bachelor&apos;s in Computer Science with a concentration in
                Mathematics and Statistics.Participated in organization such as
                ACM, VSA, RUF-I Soccer, and AI club for which I held a
                leadership position. Relevant course works include Data
                Structures and Algorithms, Linear Algebra, Statistical Analysis,
                Programming Languages, Operating System, Modeling and Design,
                Data Mining, Computer Networks, Quality Assurance, Software
                Process, Digital Logic Circuits. GPA (4.0 / 4.0)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
