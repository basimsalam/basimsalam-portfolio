
import { useState } from "react";
import recritment_ai from "../../assets/recruitment.jpeg";
import disease from "../../assets/disease.jpg";
import netflix from "../../assets/netflix.jpg";
import question_paper from "../../assets/question_paper.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
  title: "Recruiment AI Agent",
  subtitle: "AI-Powered Hiring Platform",
  description: "Agentic AI for automating the recruitment process.",
  image: recritment_ai,
  link: "#",
  },

  {
    title: "Disease Predictor",
    subtitle: "Health AI Tool",
    description:
      "Multi-modal disease predictor using ML and DL. Predicts diseases from text and images with high accuracy.",
    image: disease,
  },
  {
    title: "Netflix Clone",
    subtitle: "Frontend Development",
    description:
      "A responsive Netflix UI clone built using React. Includes authentication, movie previews, and category listings.",
    image: netflix,
  },
  {
    title: "AI Question Paper Generator",
    subtitle: "AI-Powered Educational Tool",
    description:
      "An AI-powered tool that generates question papers based on input parameters.",
    image: question_paper,
  },
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-white text-gray-900 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-2">
          Things I have built
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16">
          A showcase of projects and work I’ve created
        </p>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="object-cover w-full h-60 lg:h-80 transition-transform duration-500 hover:scale-105 rounded-xl"
                data-cursor-label="View"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-1">{currentProject.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">

                {currentProject.subtitle}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">

                {currentProject.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mt-10">
          <button
  onClick={prevProject}
  className="p-2 rounded-full transition
             border border-gray-300 hover:bg-gray-200
             dark:border-white/20 dark:hover:bg-white/10"
>
  <ChevronLeft size={20} />
</button>

<button
  onClick={nextProject}
  className="p-2 rounded-full transition
             border border-gray-300 hover:bg-gray-200
             dark:border-white/20 dark:hover:bg-white/10"
>
  <ChevronRight size={20} />
</button>

        </div>
      </div>
    </section>
  );
};
