import React, { useEffect } from "react";
import Button from "components/Button";
import IconLogo from "./IconText";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";

export default function Header({ isCentered }) {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
  });
  const getNavLinkClass = (path) => {
    return pathname === path ? " active" : "";
  };

  if (isCentered) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="/" type="link">
                <IconLogo />
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );
  }
  return (
    <Fade>
      <header className="spacing-sm">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <IconLogo />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ms-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Fade>
  );
}
