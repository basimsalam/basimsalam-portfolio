import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Recruiment AI Agent",
    description: "Agentic AI for automating the recruitment process.",
    image: "/basim-portfolio/assets/img1.jpeg",
    tech: ["CrewAI","mistral","llama3","FastAPI","Python"],
    link: "#",
  },
  {
    title: "Disease Predictor",
    description: "Multi-Modal Disease Predictor using Machine Learning & Deep Learning",
    image: "/basim-portfolio/assets/img3.jpeg",
    tech: ["Machine Learning","Deep Learning","CNN"],
    link: "#",
  },
  {
    title: "Netflix Clone",
    description: "A Basic Frontend Clone of Netflix using React",
    image: "/basim-portfolio/assets/img4.jpeg",
    tech: ["React"],
    link: "#",
  },

  
];

export const Projects = () => {
  const isFew = projects.length < 4;

  return (
    <section id="projects" className="min-h-screen py-20 bg-black text-white">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div
            className={`w-full ${
              isFew
                ? "flex justify-center flex-wrap gap-8"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            }`}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden border border-white/10 shadow-md bg-black transition duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 z-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm scale-105 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"></div>

                {/* Card */}
                <div className="relative z-10 rounded-xl overflow-hidden">
                  <div className="relative w-full h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white text-center px-4">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.link}
                      className="text-blue-400 underline mt-4 text-sm hover:text-blue-300 transition"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
