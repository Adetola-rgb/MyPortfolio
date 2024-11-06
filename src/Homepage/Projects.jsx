import funiro from "../images/funiro.png";
import nextcent from "../images/nexcent.png";
import project3 from "../images/project3.png";
import arrowimg from "../images/arrow.png";
import "../assets/index.css";

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={funiro} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Project One
              </h2>
              <div className="btn-container">
                <a href="https://github.com/Adetola-rgb/Funiro" target="_blank">
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </a>

                <a href="https://adetola-rgb.github.io/Funiro/" target="_blank">
                  <button
                    className="btn btn-color-2 project-btn"
                  >
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
            <div className="details-container color-container">
              <div class="article-container">
                <img src={nextcent} alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Two
              </h2>
              <div className="btn-container">
                <a href="https://github.com/Adetola-rgb/project-2" target="_blank"><button
                  className="btn btn-color-2 project-btn"
                  >Github </button>
                </a>
                 
                <a href="https://adetola-rgb.github.io/project-2/" target="_blank"><button
                  className="btn btn-color-2 project-btn"
                >
                  Live Demo
                </button></a>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={project3} alt="Project 3" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Three
              </h2>
              <div className="btn-container">
               <a href="https://github.com/Adetola-rgb/Country-project" target="_blank"> <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button></a>
                <a href="https://adetola-rgb.github.io/Country-project/" target="_blank">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowimg}
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#contact'"
        />
      </section>
    </div>
  );
};

export default Projects;
