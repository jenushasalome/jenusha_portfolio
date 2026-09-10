function Contact() {

  function handleSubmit(event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");
  }

  return (
    <section id="contact" className="section">

      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>
            Let's work together
          </h3>

          <p>
            I'm always interested in learning, building
            projects and exploring new opportunities.
          </p>

          <p>
            📧 jenushssalome@gmail.com
          </p>

          <p>
            📱 +91 6380722975
          </p>

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

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;