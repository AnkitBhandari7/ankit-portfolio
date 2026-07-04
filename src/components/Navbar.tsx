import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    setIsMenuOpen(false);
    if (window.innerWidth > 1024) {
      e.preventDefault();
      smoother.scrollTo(target, true, "top top");
    }
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          AB
        </a>
        <a
          href="mailto:ankeetbhandari77@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          ankeetbhandari77@gmail.com
        </a>

        {/* Hamburger Toggle Button */}
        <button
          className={`nav-hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          data-cursor="disable"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu Links */}
        <ul className={isMenuOpen ? "nav-open" : ""}>
          <li>
            <a
              data-href="#about"
              href="#about"
              onClick={(e) => handleLinkClick(e, "#about")}
            >
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a
              data-href="#work"
              href="#work"
              onClick={(e) => handleLinkClick(e, "#work")}
            >
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a
              data-href="#contact"
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
            >
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
