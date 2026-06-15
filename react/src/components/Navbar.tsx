import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          Portfolio
        </h1>

        <div className="flex items-center gap-5">
          
          <div className="hidden md:flex gap-8 text-slate-300">
            <a href="#home" className="hover:text-cyan-400 transition">
                Home
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
                About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
            </a>
            </div>

            <a href="https://github.com/MuskaanKaur1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-white hover:text-cyan-400 hover:scale-110 transition-all duration-300" />
          </a>
          

          <a href="https://www.linkedin.com/in/muskaan-kaur-768751281"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaLinkedin className="text-2xl text-white hover:text-cyan-400 hover:scale-110 transition-all duration-300" />
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;