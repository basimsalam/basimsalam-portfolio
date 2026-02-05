

const certifications = [
  {
    title: "IBM RAG and Agentic AI Professional Certificate",
    issuer: "IBM",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/XFKZM8M8AFI5",
  },
  {
    title: "IBM Data Analyst Professional Certificate",
    issuer: "IBM",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/XXLAXTEGRBW6",
  },
  {
    title: "Edapt - Prompt Engineering for Generative AI Tools",
    issuer: "Edapt",
    year: "2024",
    link: "#",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white text-gray-900 dark:bg-black dark:text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-12 text-center 
               bg-gradient-to-r from-blue-500 to-cyan-400 
               bg-clip-text text-transparent">
  Certifications
</h2>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-xl p-6 
                         hover:border-gray-400 dark:hover:border-gray-600 hover:-translate-y-1 
                         transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">
                {cert.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">

                {cert.issuer} • {cert.year}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
