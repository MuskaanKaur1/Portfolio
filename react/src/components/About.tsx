import { FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section 
      id="about"
    className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <p className="text-slate-400 text-lg leading-relaxed">
              I'm a Full Stack Developer passionate about building
              modern and user-friendly web applications.

              I enjoy working with React, Node.js, Express, MongoDB,
              and continuously learning new technologies to improve
              my development skills.
            </p>
            
            
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg flex items-center gap-4">
              <div className="bg-slate-100 p-4 rounded-full">
                <FaRocket className="text-cyan-500 text-2xl" />
              </div>

              <p className="text-slate-800 text-lg leading-relaxed">
                Currently exploring AI integrations, TypeScript, and advanced
                frontend development to build smarter and more impactful
                applications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-cyan-400">
                4+
              </h3>
              <p className="text-slate-400 mt-2">
                Projects Built
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-cyan-400">
                MERN
              </h3>
              <p className="text-slate-400 mt-2">
                Stack Developer
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-cyan-400">
                AI
              </h3>
              <p className="text-slate-400 mt-2">
                Learning & Building
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-cyan-400">
                TS
              </h3>
              <p className="text-slate-400 mt-2">
                Learning TypeScript
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
