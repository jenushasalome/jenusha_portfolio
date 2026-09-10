function Projects() {

  const projects = [
    {
      title: "Placement Preparation Portal",
      description:
        "A MERN Stack web application designed to support students with campus placement preparation through authentication, aptitude tests, coding practice, interview scheduling and performance tracking.",
      technologies:
        "MongoDB • Express.js • React.js • Node.js"
    },

    {
      title: "Glowsure",
      description:
        "An e-commerce platform featuring product listing, shopping cart, secure payments, admin dashboard, inventory tracking and responsive UI.",
      technologies:
        "HTML • CSS • JavaScript • MongoDB"
    }
  ];

  return (
    <section id="projects" className="section">

      <div className="section-heading">
        <p>MY RECENT WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        {projects.map((project) => (

          <div className="project-card" key={project.title}>

            <div className="project-top">
              &lt;/&gt;
            </div>

            <div className="project-content">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <span className="technologies">
                {project.technologies}
              </span>

              <div className="project-buttons">

                <a
                  href="https://github.com/jenushasalome"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a href="#">
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;