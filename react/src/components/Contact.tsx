import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Get In Touch
        </h2>

        <p className="text-slate-400 text-center mb-12">
          Feel free to reach out for opportunities, collaborations,
          or just a friendly chat.
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-cyan-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-cyan-500"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-cyan-500"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl font-medium transition"
            >
              Send Message
            </button>

          </form>

          <div className="flex justify-center gap-8 mt-10">

            <a
              href="https://github.com/MuskaanKaur1"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-3xl text-white hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/muskaan-kaur-768751281"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-3xl text-white hover:text-cyan-400 transition" />
            </a>

            <a href="mailto:muskaann451@gmail.com">
              <FaEnvelope className="text-3xl text-white hover:text-cyan-400 transition" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;