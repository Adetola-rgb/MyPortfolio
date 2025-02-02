import Check from "../images/checkmark.png";
import arrowimg from "../images/arrow.png";
import "../assets/index.css";

const Experience = () => {
  return (
    <div>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Software Development</h2>
              <div className="article-container">
                <article>
                  <img src={Check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={Check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={Check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>SASS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={Check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={Check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={Check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Software Development</h2>
              <div className="article-container">
                <article>
                  <img src={Check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>React Typescript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={Check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={Check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>React JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={Check} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Git & Github</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowimg}
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#projects'"
        />
      </section>
    </div>
  );
};

export default Experience;
