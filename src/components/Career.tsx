import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer Intern</h4>
                <h5>Swift Technology Pvt. Ltd (IME Group)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built and maintained REST APIs using Node.js and Express.js with
              routing, middleware, and JWT-based authentication. Worked with
              MySQL (Sequelize ORM) and MongoDB (Mongoose) for database design,
              migrations, and CRUD operations. Applied TypeScript for type-safe
              development; documented APIs with Swagger UI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc (Hons) Computing</h4>
                <h5>Islington College – London Metropolitan University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Currently pursuing BSc (Hons) Computing at Islington College,
              affiliated with London Metropolitan University, Kathmandu, Nepal.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SLC</h4>
                <h5>Uniglobe SS/College (NEB)</h5>
              </div>
              <h3>2021 – 2023</h3>
            </div>
            <p>
              Completed SLC from Uniglobe SS/College under the National
              Examination Board (NEB), Kamaladi, Kathmandu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
