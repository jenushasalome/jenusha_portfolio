function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-text">

        <p className="hello">
          Hello, I'm
        </p>

        <h1>
          Jenusha Salome K
        </h1>

        <h2>
          Aspiring <span>MERN Stack Developer</span>
        </h2>

        <p className="description">
          I build responsive and full-stack web applications
          using modern web technologies. I enjoy learning,
          creating and solving real-world problems through code.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
          <a
  href="/Jenusha_Salome_Resume.pdf"
  download="Jenusha_Salome_Resume.pdf"
  className="primary-button"
>
  Download Resume
</a>

        </div>
        

        <div className="social-links">

          <a
            href="https://github.com/jenushasalome"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/jenusha-salome-187433385"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

      <div className="hero-animation">

        <div className="circle">
          <div className="circle-inner">
            &lt;/&gt;
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;