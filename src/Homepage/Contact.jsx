import email from "../images/email.png";
import Linkedin from "../images/linkedin.png";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={email}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:aserikanmoshood@gmail.com">Aserikanmoshood@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={Linkedin}
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/moshood-adetola-aserikan-9b829b251/" target="_blank">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
