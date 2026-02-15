import { RevealOnScroll } from "../RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import structureIcon from "../../assets/structure.png";
import Python from "../../assets/python.png";
import ai_img from "../../assets/ai.png";
import chatgpt from "../../assets/chatgpt.png";
import Docker from "../../assets/docker.png";
import html from "../../assets/html-5.png";
import cvision from "../../assets/vision.png";
import github from "../../assets/git.png";
import analytical from "../../assets/analytical-chart.png";
import machinelearning from "../../assets/machine-learning.png";
import deeplearning from "../../assets/deep-learning.png";



const skills = [
  { name: "React", icon: structureIcon },
  { name: "Python", icon: Python },
  { name: "Artificial Intelligence", icon: ai_img },
  { name: "Chatgpt", icon: chatgpt },
  { name: "Docker", icon: Docker },
  { name: "HTML", icon: html },
  { name: "Computer Vision", icon: cvision },
  { name: "Git", icon: github },
  { name: "Data Analysis", icon: analytical },
  { name: "Machine Learning", icon: machinelearning },
  { name: "Deep Learning", icon: deeplearning },
];

export const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6
           bg-white text-gray-900
           dark:bg-black dark:text-white"
>
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 text-center leading-relaxed">
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
                <div
  className="bg-transparent
             hover:bg-gray-200/40
             dark:hover:bg-white/10
             transition p-4 rounded-xl
             flex flex-col items-center justify-center gap-2 h-32
             backdrop-blur-sm"
>


                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-sm font-medium text-blue-500 dark:text-blue-400 text-center">

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
