import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
  SiChakraui,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Chakra UI", icon: <SiChakraui /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-12">
          Skills
        </h2>

        <div className="space-y-10">

          {skillCategories.map((category) => (
            <div key={category.title}>

              <h3 className="text-2xl font-semibold text-cyan-400 mb-5">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="text-5xl text-cyan-400">
                      {skill.icon}
                    </div>

                    <h4 className="text-white font-medium">
                      {skill.name}
                    </h4>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;