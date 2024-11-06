import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";
import Profileimg from "../images/main.jpg";

import "../assets/index.css";

const Profile = () => {
  return (
    <div>
      <section id="profile">
        <div className="section__pic-container">
          <img
            style={{ width: "400px", borderRadius: "50%", border: "none" }}
            src={Profileimg}
            alt=""
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Aserikan Moshood Adetola</h1>
          <p className="section__text__p2">Software Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onclick="window.open('./assets/resume-example.pdf')"
            >
              Download CV
            </button>
            <a href="mailto:aserikanmoshood@gmail.com">
            
              <button className="btn btn-color-1">Contact Info</button>
            </a>
          </div>
          <div id="socials-container">
            <a href="https://www.linkedin.com/in/moshood-adetola-aserikan-9b829b251/" target="_blank">
              <img
                src={Linkedin}
                alt="My LinkedIn profile"
                className="icon"
              />
            </a>
            <a href="https://github.com/Adetola-rgb" target="_blank">
            <img
              src={Github}
              alt="My Github profile"
              className="icon"
            />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
