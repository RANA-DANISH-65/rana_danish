import "./footor.css";
const Footor = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Danish</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/rana_danish_65/"
            className="footor__social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://github.com/RANA-DANISH-65"
            className="footor__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rana-danish-89349a32b/"
            className="footor__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Rana Danish. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footor;
