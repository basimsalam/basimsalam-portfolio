import { Globe, ShoppingCart, Code2, ArrowRight } from "lucide-react";
import { categories, projects } from "../../data/projects";

const icons = { globe: Globe, cart: ShoppingCart, code: Code2 };

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-white text-gray-900 dark:bg-black dark:text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2">
          Things I have built
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16">
          Pick a category to see the projects inside it
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat) => {
            const Icon = icons[cat.icon];
            const count = projects.filter((p) => p.category === cat.slug).length;
            return (
              <a
                key={cat.slug}
                href={`#/category/${cat.slug}`}
                className="group rounded-2xl p-6 border border-gray-200 dark:border-white/10
                           bg-gray-50 dark:bg-white/5 hover:border-blue-500 hover:-translate-y-1
                           transition"
              >
                <Icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-blue-500">
                  {count} {count === 1 ? "project" : "projects"}
                  <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
