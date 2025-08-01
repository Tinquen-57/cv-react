import Navigation from "../components/Navigation";

function Contact() {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span> Nilvange</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <span
                className="clickInput"
                onClick={() => alert("Numéro copié!")}
              >
                {" "}
                06 13 97 10 70
              </span>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <span
                className="clickInput"
                onClick={() => alert("Email copié!")}
              >
                {" "}
                herrmann.quentin57@gmail.com
              </span>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>GitHub</h4>
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>CodePen</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
