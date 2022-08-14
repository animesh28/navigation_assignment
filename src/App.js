import "./index.css";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="nav__left">
          <div className="navigation">
            <input
              type="checkbox"
              className="navigation__checkbox"
              id="navi-toggle"
            />

            <label htmlFor="navi-toggle" className="navigation__button">
              <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <a href="#" className="navigation__link navigation__link--1">
                    <span>01</span>About Company
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link navigation__link--2">
                    <span>02</span>Services
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link navigation__link--3">
                    <span>03</span>Popular Plans
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link navigation__link--4">
                    <span>04</span>Contact
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link navigation__link--5">
                    <span>05</span>Know More
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nav__left-content">
            <img src={logo} alt="logo" className="nav__left-logo" />

            <div className="nav__left-contact">
              <a
                href="mailto:info@companyname.com"
                className="nav__left-contact-link"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="nav__left-contact-link-icon"
                />
                info@companyname.com
              </a>
              <a href="phone:+911234567890" className="nav__left-contact-link">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="nav__left-contact-link-icon"
                />
                001 (212) 334 987
              </a>
            </div>
          </div>
        </div>

        <div className="nav__right">
          <a href="" className="btn">
            Login
          </a>

          <a href="" className="btn btn-filled">
            Sign Up
          </a>
        </div>
      </nav>
      <div className="nav-vertical">&nbsp;</div>
    </div>
  );
}

export default App;
