function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GitHub",
    "VS Code",
    "Postman"
  ];

  return (
    <section id="skills" className="section">

      <div className="section-heading">
        <p>MY TECHNOLOGIES</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div
            className="skill-card"
            key={skill}
          >

            <span>
              0{index + 1}
            </span>

            <h3>
              {skill}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;