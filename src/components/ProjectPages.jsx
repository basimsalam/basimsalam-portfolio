import { ArrowLeft, ExternalLink } from "lucide-react";
import { categories, projects } from "../data/projects";

const Cover = ({ project, className = "" }) =>
  project.image ? (
    <img
      src={project.image}
      alt={project.title}
      className={`object-cover w-full ${className}`}
    />
  ) : (
    <div
      className={`w-full flex items-center justify-center text-white text-5xl font-bold
                  bg-gradient-to-br ${project.gradient ?? "from-gray-500 to-gray-800"} ${className}`}
    >
      {project.title
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0])
        .join("")}
    </div>
  );

const BackLink = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 text-blue-500 hover:underline mb-8"
  >
    <ArrowLeft className="w-4 h-4" />
    {children}
  </a>
);

const NotFound = () => (
  <div className="max-w-3xl mx-auto px-6 pt-32 pb-20 min-h-screen">
    <BackLink href="#projects">Back to projects</BackLink>
    <h2 className="text-3xl font-bold">Page not found</h2>
  </div>
);

export const CategoryPage = ({ slug }) => {
  const category = categories.find((c) => c.slug === slug);
  if (!category) return <NotFound />;
  const items = projects.filter((p) => p.category === slug);

  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-20 min-h-screen">
      <BackLink href="#projects">All categories</BackLink>
      <h2 className="text-4xl font-bold mb-2">{category.title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-12">
        {category.description}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <a
            key={p.slug}
            href={`#/project/${p.slug}`}
            className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10
                       bg-gray-50 dark:bg-white/5 hover:border-blue-500 hover:-translate-y-1 transition"
          >
            <Cover project={p} className="h-44" />
            <div className="p-5">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {p.subtitle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export const ProjectPage = ({ slug }) => {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <NotFound />;
  const category = categories.find((c) => c.slug === project.category);

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-20 min-h-screen">
      <BackLink href={`#/category/${project.category}`}>
        Back to {category?.title}
      </BackLink>

      <Cover project={project} className="h-64 rounded-2xl mb-8" />

      <h2 className="text-4xl font-bold mb-1">{project.title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{project.subtitle}</p>
      <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
        {project.description}
      </p>

      <h3 className="text-xl font-bold mb-3">Details</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
        {project.details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mb-3">Built with</h3>
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-500"
          >
            {t}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500
                     text-white font-medium hover:bg-blue-600 transition"
        >
          Visit project <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};
