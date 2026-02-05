import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ResumeTabs() {
  const [activeTab, setActiveTab] = useState("experience");

  const education = [
    {
      title: "B.Tech in Computer Science – APJ Abdul Kalam Technical University.",
      date: "2020 – 2024",
      description: "Graduated ",
    },
    {
      title: "Higher Secondary School – EMSS GHSS Pappinisseri.",
      date: "2017 – 2019"
    },
    {
      title: "High School – International Indian School, Riyadh.",
      date: "2015 – 2017"
    },
  ];

  const experiences = [
    {
      title: "AI Engineer – Summit Solutions",
      date: "May 2025 – Present",
      description: "Developing AI-driven systems using Python, CrewAI, LangChain, and LLaMA 3 via Ollama.",
    },
    {
      title: "Data Science Intern – Luminar Technolab",
      date: "Aug 2024 – Apr 2025",
      description: "Designed predictive models, data visualizations, and EDA workflows to uncover key patterns and support data-driven decision-making.",
    },
  ];

  const data = activeTab === "experience" ? experiences : education;

  return (
    <section id = "experience" className="py-20 px-6 bg-white text-gray-900 dark:bg-black dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Experience & Education
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-12 space-x-4">
        {["experience", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-6 rounded-lg font-medium border transition-all duration-300 ${
              activeTab === tab
                ? "bg-blue-600 text-white border-blue-600 scale-105 shadow-lg"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-400 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>

        <div className="relative z-12 space-y-0">
          <AnimatePresence mode="wait">
            {data.map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 p-6 z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1 }}
                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-300 dark:border-gray-700 shadow-lg hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <h3 className="text-l font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{item.date}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Marker */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shadow-md"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.1 }}
                    viewport={{ once: true }}
                  >
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
