import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ANKIT
              <br />
              <span>BHANDARI</span>
            </h1>
          </div>
          <div className="landing-info">
            <div className="landing-role-line1">
              <h3>A</h3>
              <div className="landing-role-wrapper">
                <div className="landing-role-track">
                  <h2 className="landing-info-h2">Backend</h2>
                  <h2 className="landing-info-h2">Flutter</h2>
                  <h2 className="landing-info-h2">Full Stack</h2>
                </div>
              </div>
            </div>
            <h2 className="landing-developer-text">Developer</h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
