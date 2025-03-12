import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "A Page Replacement Visualization made to help students with the Operating Systems class.",
    link: "https://jordyvelinovgit.github.io/",
    text: "View Visualization"
  },
  {
    title: "Project 2",
    description: "A school assignment made to learn Mikro-ORM, Docker, and Controllers in TypeScript",
    link: "https://github.com/JordyVelinovGit/Employee",
    text: "View on GitHub"
  },
];

function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <a
              href={project.link}
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              {project.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
