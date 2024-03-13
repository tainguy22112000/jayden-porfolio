import { ProjectRow } from "../sub/ProjectRow";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20 gap-10 max-w-screen-2xl z-40"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>

      <p className="text-white flex flex-col w-full h-full gap-10 px-6 md:flex-row">
        I&apos;ve embarked on numerous projects throughout the years, but these are the ones I hold
        closest to my heart. Your collaboration is highly valued!
      </p>

      <div className="flex flex-col gap-10 md:gap-32">
        <ProjectRow
          title="ONE Drink and Food"
          image="/project/one-project.png"
          description="Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          link="https://www.mapas.agency/"
        />

        <ProjectRow
          title="Modern Next.js Portfolio"
          image="/project/mapas-project.png"
          description="Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          className="flex-row-reverse"
        />

        <ProjectRow
          title="Modern Next.js Portfolio"
          image="/project/kingdom-project.png"
          description="Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />

        <ProjectRow
          title="Starkdeck Corp."
          image="/project/starkdeck-project.png"
          description="Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          className="flex-row-reverse"
        />
      </div>
    </div>
  );
};

export default Projects;
