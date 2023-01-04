import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Matheus</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#protfolio" className="footer__link">Projects</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://github.com/MatheusAraripe" className="footer__social-link" target="_blank">
          <i className="bx bxl-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/matheus-araripe/" className="footer__social-link" target="_blank">
          <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Matheus Araripe. All rigths reserved</span>
      </div>
    </footer>
  )
}

export default Footer
