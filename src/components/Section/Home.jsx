import { RevealOnScroll } from "../RevealOnScroll";
// import heroImg from "/basim-portfolio/assets/basim.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import heroImg from '../../assets/basim.jpg';
import resume from '../../assets/BasimCV.pdf';

export const Home = () => {
  return (
    <section
  id="home"
  className="min-h-screen flex items-center justify-center bg-black text-white px-6 md:px-12 pt-24 md:pt-32"
>

      <RevealOnScroll>
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            {/* Social Icons */}
            <div className="flex space-x-6 mb-6 text-2xl text-white">
              <a
                href="https://github.com/basimsalam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/basimsalam/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-6 h-[64px]">
              <Typewriter
                words={[
                  "Basim Abdul Salam",
                  "a Data Scientist",
                  "a Data Analyst",
                  "an AI Engineer",
                  "a Python Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={2500}
              />
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
              I’m a Data Scientist with a focus on AI, machine learning, and data analytics.
              I enjoy working with Python and building smart, predictive models.
              I love turning complex data into clear, actionable insights.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={resume}
                download
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src={heroImg}
              alt="Basim's Photo"
              className="rounded-xl shadow-lg object-cover max-w-sm w-full"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
