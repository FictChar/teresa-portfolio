
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  TestTube2,
  Layers,
} from "lucide-react";
import "./App.css";
import { useState } from "react";

const projects = [
  {
    number: "01",
    type: "Full-stack development",
    title: "AirBNC",
    description:
      "A property-listing application built with React, Node.js, Express and PostgreSQL. Features include property data, API integration and filtering.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/FictChar/airbnc_frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/FictChar/airbnc_project",
      },
    ],
  },
  {
    number: "02",
    type: "Website development",
    title: "Garden of Humans",
    description:
      "A website project for a music band, bringing together member profiles, music, gig information and contact links in one place.",
    technologies: ["React", "JavaScript", "CSS"],
    links: [],
  },
  {
    number: "03",
    type: "Product & quality",
    title: "Digital product improvements",
    description:
      "Examples from community platform work, including reporting bugs, raising UX improvement tickets, and supporting QA and UAT testing.",
    technologies: ["QA / UAT", "UX feedback", "Bug reporting"],
    links: [],
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["JavaScript", "React", "HTML", "CSS", "Responsive design"],
  },
  {
    icon: Database,
    title: "Backend & data",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "SQL"],
  },
  {
    icon: TestTube2,
    title: "Testing & quality",
    skills: ["Jest", "Supertest", "TDD", "QA", "UAT"],
  },
  {
    icon: Layers,
    title: "Tools & workflow",
    skills: ["Git", "GitHub", "VS Code", "Agile / Scrum", "Figma"],
  },
];

function SectionHeading({ number, eyebrow, title }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        {number} / {eyebrow}
      </span>
      <h2>{title}</h2>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="logo" href="#home" onClick={closeMenu}>
          Teresa Mayoral<span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "navigation open" : "navigation"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Get in touch <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              DEVELOPER PORTFOLIO · LEEDS, UK
            </p>

            <h1>
              Building useful
              <br />
              things for the <span>web.</span>
            </h1>

            <p className="hero-description">
              I'm a digital professional moving further into software
              development, combining hands-on coding with experience in
              digital products, user support and quality assurance.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                Explore my work <ArrowDown size={17} />
              </a>
              <a className="text-link" href="#contact">
                Let's connect <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="hero-aside">
            <div className="availability">
              <span className="status-dot" />
              Open to new opportunities
            </div>
            <div className="hero-note">
              <span className="note-number">01</span>
              <p>
                Curious by nature.
                <br />
                Practical by design.
              </p>
              <span className="note-line" />
              <small>
                JavaScript · React · Product thinking
              </small>
            </div>
          </div>

          <div className="hero-bottom">
            <span>SELECTED WORK & EXPERIENCE</span>
            <a href="#about" aria-label="Scroll to about section">
              <ArrowDown size={18} />
            </a>
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <SectionHeading
            number="01"
            eyebrow="ABOUT"
            title="A little about me."
          />

          <div className="about-grid">
            <p className="about-lead">
              I bring together a background in digital experiences
              and a growing focus on building them.
            </p>

            <div className="about-detail">
              <p>
                My experience spans website content and optimisation,
                customer and client support, community platforms, and
                working with developers to identify issues and improve
                digital products.
              </p>
              <p>
                After completing an intensive full-stack JavaScript
                bootcamp at Northcoders, I've been developing my skills
                through personal projects and continued learning.
              </p>
              <p>
                I'm particularly interested in opportunities where
                development, data, testing and user experience overlap.
              </p>
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <SectionHeading
            number="02"
            eyebrow="SELECTED WORK"
            title="Things I've worked on."
          />

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-content">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.technologies.map((technology) => (
                      <span className="tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label} <ArrowUpRight size={15} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <ArrowUpRight className="project-arrow" size={22} />
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <SectionHeading
            number="03"
            eyebrow="TOOLKIT"
            title="Skills I'm building on."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article className="skill-card" key={group.title}>
                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{group.title}</h3>

                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <p className="skills-note">
            A growing toolkit — developed through training, practical
            projects and continued learning.
          </p>
        </section>

        <section className="contact section-wrap" id="contact">
          <span className="eyebrow">04 / CONTACT</span>
          <h2>
            Have a project
            <br />
            or opportunity in mind<span>?</span>
          </h2>
          <p>
            I'm interested in junior development opportunities and
            roles that combine technology, problem-solving and users.
          </p>

          <a
            className="button button-light"
            href="mailto:YOUR_EMAIL@example.com"
          >
            <Mail size={17} /> Get in touch
          </a>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="logo" href="#home">Teresa Mayoral<span></span></a>
        <p>Designed and built with React.</p>

        <div className="social-links">
        <a
         href="https://github.com/FictChar"
         target="_blank"
         rel="noreferrer"
         aria-label="GitHub"
>
         GitHub
</a>
          <a
            href="www.linkedin.com/in/teresa-mayoral-2b059148"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
