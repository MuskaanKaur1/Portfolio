import Ecommerce from "../assets/projects/Ecommerce.png"
import ChatApp from "../assets/projects/ChatApp.png"
import HireHub from "../assets/projects/HireHub.png"
import Chatbot from "../assets/projects/Chatbot.png"
import Mern from "../assets/projects/Mern.png"


const projects = [
    {
    title: "E-Commerce Website",
    image: Ecommerce,
    description:
      "An e-commerce platform with authentication, cart functionality, wishlist and product management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/MuskaanKaur1/Ecommerce-Website",
    
  },
  
  {
    title: "Real-Time Chat App",
    image: ChatApp,
    description:
      "A chat application with real-time messaging, image sharing, and Socket.IO integration.",
    tech: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    github: "https://github.com/MuskaanKaur1/ChatApp",
    
  },
  {
    title: "HireHub",
    image: HireHub,
    description:
      "A full-stack job portal where users can apply for jobs and recruiters can manage postings.",
    tech: ["React", "Node.js", "Express", "MongoDB", "ChakraUI"],
    github: "https://github.com/MuskaanKaur1/HireHub-Job-Portal",
    
  },
  {
    title: "Mern Social",
    image: Mern,
    description:
    "A social media platform where users can create posts, like content, and interact through comments with secure authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/MuskaanKaur1/Mern-Social",
    
  },
  {
    title: "AI Chatbot",
    image: Chatbot,
    description:
    "Built an AI-powered chatbot using the Gemini API that generates intelligent responses to user queries in real time. Implemented a responsive chat interface and API integration for seamless conversational experiences.",
    tech: ["React", "Gemini API", "JavaScript", "CSS"],
    github: "https://github.com/MuskaanKaur1/Chatbot",
    
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image Placeholder */}
              <div className="h-48 bg-slate-800 flex items-center justify-center">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-500 px-4 py-2 rounded-lg text-white hover:bg-cyan-600"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;