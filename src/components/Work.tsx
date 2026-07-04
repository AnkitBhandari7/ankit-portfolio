import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Hamro Pani",
    number: "01",
    category: "Digital Water Distribution & Tracking System",
    description:
      "A cross-platform mobile app addressing urban water scarcity, connecting Ward Admins, Water Tanker Vendors, and Residents with real-time GPS tanker tracking, eSewa payment integration, and bilingual (English/Nepali) support.",
    tools: ["Flutter", "Dart", "Node.js", "Express.js", "MySQL", "Prisma ORM", "Socket.io", "Firebase", "eSewa SDK", "OpenStreetMap"],
    image: "/images/hamropani.png",
    github: "https://github.com/AnkitBhandari7/Hamro-Pani-FYP",
    demo: "https://github.com/AnkitBhandari7/Hamro-Pani-FYP/releases/tag/v1.0.0",
  },
  {
    title: "AutoPart Pro",
    number: "02",
    category: "Enterprise Auto Parts & Service Management System",
    description:
      "A secure, role-based enterprise auto parts dealership system with Administrator, Staff, and Customer portals. Features LINQ-driven financial reporting, EF Core migrations, JWT auth, and cloud-ready monorepo deployment.",
    tools: ["ASP.NET Core (C#)", "React.js", "PostgreSQL", "Entity Framework Core", "JWT", "LINQ"],
    image: "/images/autopart.png",
    github: "https://github.com/ankitBhandari7",
    demo: "https://vehicleparts-web.onrender.com/",
  },
  {
    title: "MindFlow",
    number: "03",
    category: "Secure Desktop & Web Journaling Application",
    description:
      "Ships as a native desktop app (.NET MAUI) and cloud-hosted web app from a single Blazor codebase. Features secure auth, rich-text journaling with mood labels, analytics dashboards, custom PDF export, and Docker deployment.",
    tools: [".NET 10", ".NET MAUI Blazor Hybrid", "ASP.NET Core Blazor Server", "EF Core", "SQLite", "PostgreSQL", "QuestPDF", "Docker"],
    image: "/images/mindspace.png",
    github: "https://github.com/ankitBhandari7",
    demo: "https://journal-desktop-app.onrender.com/",
  },
  {
    title: "Wellness",
    number: "04",
    category: "Multi-Screen Flutter Application",
    description:
      "A beautiful multi-screen Flutter app with custom dark-themed UI including login, sign-up, dashboard, profile, and quotes detail screens. Features Navigator-based transitions, image caching, SVG support, and custom ThemeData.",
    tools: ["Flutter", "Dart", "Navigator", "Image Caching", "SVG", "ThemeData"],
    image: "/images/Solidx.png",
    github: "https://github.com/ankitBhandari7",
    demo: null,
  },
  {
    title: "E-Commerce Website",
    number: "05",
    category: "Shopping Mart Client Application",
    description:
      "A fully responsive and mobile-friendly shopping site for a grocery mart, supporting multi-device access with a clean, modern UI and seamless product browsing experience.",
    tools: ["HTML5", "CSS3", "Responsive Design", "Mobile-Friendly UI"],
    image: "/images/skillora_final.png",
    github: "https://github.com/ankitBhandari7",
    demo: "https://grocerymandu.vercel.app/",
  },
  {
    title: "Real-Time Chat Application",
    number: "06",
    category: "Full-Stack WebSocket Application",
    description:
      "A real-time messaging app using WebSockets with namespace and room-based messaging, JWT middleware authentication, and a React-powered view engine for the frontend.",
    tools: ["Node.js", "TypeScript", "Express.js", "Socket.io", "React.js"],
    image: "/images/hamropani.png",
    github: "https://github.com/ankitBhandari7",
    demo: null,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const project = projects[currentIndex];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-slide-wrapper">
          {/* Left: Project Info */}
          <div className="work-info-panel">
            <span className="work-project-number">{project.number}</span>
            <h3 className="work-project-title">{project.title}</h3>
            <p className="work-project-category">{project.category}</p>
            <p className="work-project-description">{project.description}</p>

            <div className="work-tech-stack">
              <span className="work-tech-label">TOOLS & TECH STACK</span>
              <div className="work-tech-tags">
                {project.tools.map((tool, i) => (
                  <span key={i} className="work-tech-tag">{tool}</span>
                ))}
              </div>
            </div>

            <div className="work-buttons">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-btn work-btn-github"
                  data-cursor="disable"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-btn work-btn-demo"
                  data-cursor="disable"
                >
                  <span>Live Demo</span>
                  <MdArrowOutward />
                </a>
              )}
            </div>
          </div>

          {/* Right: Project Image */}
          <div className="work-image-panel">
            <div className="work-image-frame">
              <img
                src={project.image}
                alt={project.title}
                className="work-project-image"
              />
            </div>

            {/* Navigation Bar */}
            <div className="work-nav-bar">
              <button
                className="work-nav-arrow"
                onClick={goToPrev}
                aria-label="Previous project"
                data-cursor="disable"
              >
                <MdArrowBack />
              </button>

              <div className="work-dots">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`work-dot ${index === currentIndex ? "work-dot-active" : ""}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to project ${index + 1}`}
                    data-cursor="disable"
                  />
                ))}
              </div>

              <button
                className="work-nav-arrow"
                onClick={goToNext}
                aria-label="Next project"
                data-cursor="disable"
              >
                <MdArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
