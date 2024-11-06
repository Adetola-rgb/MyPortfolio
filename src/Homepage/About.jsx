import main2 from "../images/about.jpeg";
import expimg from "../images/experience.png";
import eduimg from "../images/education.png";
import arrowimg from "../images/arrow.png"
import "../assets/index.css";

const About = () => {
  return (
    <div>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              style={{ width:"400px", filter: "grayscale(100%)" }}
              src={main2}
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={expimg} alt="Experience icon" class="icon" />
                <h3>Experience</h3>
                <p>
                  6+ months <br />
                  Software Development
                </p>
              </div>
              <div className="details-container">
                <img src={eduimg} alt="Education icon" class="icon" />
                <h3>Education</h3>
                <p>B.Sc. Bachelors Degree</p>
              </div>
            </div>
            <div className="text-container">
              <p>
              I am a software developer based in Nigeria looking for exciting opportunities. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing/watching football, photography and reading. Learning more to improve skill
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrowimg}
          alt="Arrow icon"
          className="icon arrow"
        />
      </section>
    </div>
  );
};

export default About;
