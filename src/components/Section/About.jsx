import { RevealOnScroll } from "../RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const skills = [
  { name: "React", icon: "/basim-portfolio/skills/structure.png" },
  { name: "Python", icon: "/basim-portfolio/skills/python.png" },
  { name: "Artificial Intelligence", icon: "/basim-portfolio/skills/ai.png" },
  { name: "Chatgpt", icon: "/basim-portfolio/skills/chatgpt.png" },
  { name: "Docker", icon: "/basim-portfolio/skills/docker.png" },
  { name: "HTML", icon: "/basim-portfolio/skills/html-5.png" },
  { name: "Computer Vision", icon: "/basim-portfolio/skills/vision.png" },
  { name: "Git", icon: "/basim-portfolio/skills/git.png" },
];

export const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-black text-white">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-300 text-lg mb-12 text-center leading-relaxed">
            I’m Basim Abdul Salam, a passionate and results-driven Data Scientist and AI Developer based in Kochi, Kerala. With a strong foundation in machine learning, data analytics, and predictive modeling, I specialize in building intelligent solutions that turn raw data into actionable insights.
            <br /><br />
            Currently working as an AI Developer at Summit Solutions, I develop AI-driven systems using tools like CrewAI, LangChain, and LLaMA 3, while also deploying scalable REST APIs using FastAPI. My previous role as a Data Science Intern at Luminar Technolab helped me sharpen my skills in data cleaning, exploratory data analysis (EDA), and predictive modeling using Python and Pandas.
            <br /><br />
            From building a Multi-Modal Disease Prediction System to crafting interactive dashboards, I enjoy solving real-world problems with data.
          </p>

          {/* Skills & Tools Section */}
          <h3 className="text-2xl font-semibold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Tools
          </h3>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            spaceBetween={20}
            slidesPerView={3}
            grabCursor={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="px-2"
          >
            {skills.map((skill, i) => (
              <SwiperSlide key={i}>
                <div className="bg-blue-500/10 hover:bg-blue-500/20 transition p-4 rounded-xl flex flex-col items-center justify-center gap-2 h-32">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-sm text-blue-400 font-medium text-center">
                    {skill.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </RevealOnScroll>
    </section>
  );
};
