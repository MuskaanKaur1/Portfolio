import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      id="home"
    className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 text-lg mb-3"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold text-white mb-4"
        >
          Muskaan
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-2xl text-slate-400 text-lg leading-relaxed"
        >
          I build modern, responsive, and user-friendly web applications
          using React, Node.js, Express, MongoDB and modern frontend
          technologies.
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-white font-medium inline-block"
          >
            View Projects
          </motion.a>

          <motion.a
            href="/Muskaankaur_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-xl transition inline-block"
          >
            Download Resume
          </motion.a>

        </div>

      </div>
    </section>
  );
};

export default Hero;