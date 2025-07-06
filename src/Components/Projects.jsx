import React from "react";

const projects = [
  {
    title: "Personal Portfolio",
    subtitle: "My first ever portfolio website that started my dev journey.",
    links: [
      { label: "GitHub", url: "https://github.com/yourusername/portfolio", type: "github" },
      { label: "Live Demo", url: "https://yourportfolio.com", type: "demo" }
    ]
  },
  // {
  //   title: "Designers Club",
  //   subtitle: "Official site of Designer's Club MESCOE; I worked on the frontend.",
  //   links: [
  //     { label: "GitHub", url: "https://github.com/yourusername/designersclub", type: "github" },
  //     { label: "Live Demo", url: "https://designersclub.com", type: "demo" }
  //   ]
  // },
  {
    title: "Expense - Tracker",
    subtitle: "MERN Stack app to track the expenses.",
    links: [
      { label: "GitHub", url: "https://github.com/navandarnidhi/Expense_Tracker", type: "github" }
    ]
  },
  {
    title: "Quiz - App",
    subtitle: "Spring Boot and React App for online quiz fun and same notes ",
    links: [
      { label: "GitHub", url: "https://github.com/navandarnidhi/Quiz_App", type: "github" }
    ]
  },
  {
    title: "Plant Nursery Maangement",
    subtitle: "DotNet Project that follows the CRUD for plant nursery management.",
    links: [
      { label: "GitHub", url: "https://github.com/yourusername/portfolio", type: "github" },
    ]
  },
  {
    title: "Split Expennse App",
    subtitle: "MERN Stack project to split the expenses between friends and family.",
    links: [
      { label: "GitHub", url: "https://github.com/navandarnidhi/split-expense-app", type: "github" },
      
    ]
  },
  {
    title: "Tic Tac Toe",
    subtitle: "HTML CSS JS, fun game app to have some rest.",
    links: [
      { label: "GitHub", url: "https://github.com/navandarnidhi/Tic-Tac-Toe", type: "github" }
    ]
  },
  {
    title: "Blog-App",
    subtitle: "Online Python App to write the blogs.",
    links: [
      { label: "GitHub", url: "https://github.com/navandarnidhi/Blog_App", type: "github" }
    ]
  },
];

const Projects = () => {
  return (
    <section className="projects snap-item" id="projects">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.subtitle}</p>
            <div className="project-links">
              {project.links.map((link, i) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-link ${link.type}-link`}
                  key={i}
                >
                  {link.type === 'github' && <i className="fab fa-github"></i>}
                  {link.type === 'demo' && <i className="fas fa-external-link-alt"></i>}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;