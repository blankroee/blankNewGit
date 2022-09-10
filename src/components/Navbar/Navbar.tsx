import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { gsap } from "gsap";

function revealAnim() {
  const TLFADE = gsap.timeline();

  TLFADE.from(".logo", { autoAlpha: 0, scale: 0 }).fromTo(
    ".items",
    { autoAlpha: 0, scale: 0, x: -50 },
    { autoAlpha: 1, scale: 1, y: 1, duration: 0.4, stagger: 0.3 },
    "-=0.2"
  );
}

function openMobileNav() {
  gsap.to("#navItemsMobile, .itemsMobile", { x: 0, display: 1 });
}

function closeMobileNav() {
  gsap.to("#navItemsMobile, .itemsMobile", {
    x: "100%",
    display: 0,
  });
}

export default function Navbar() {
  return (
    <div id="desktopAndMobileNavs">
      <div id="nav">
        <Link to="/">
          <img className="logo" src="BLANK-new-logo-dark.png" alt="" />
        </Link>
        <div id="navItems">
          <Link className="items" to="/">
            ראשי
          </Link>
          <Link className="items" to="/about">
            קצת עלי
          </Link>
          <Link className="items" to="/web">
            אינטרנט
          </Link>
          <Link className="items" to="/print">
            פרינט
          </Link>
          <Link className="items" to="/branding">
            מיתוג
          </Link>
          <Link className="items" to="/customers">
            לקוחות
          </Link>
          <Link className="items" to="/contact">
            צרו קשר
          </Link>
          <Link className="items" to="/signIn">
            Sign In
          </Link>
        </div>
      </div>

      <div id="mobileNav">
        <Link to="/">
          <img className="logo" src="BLANK-new-logo-dark.png" alt="" />
        </Link>
        <img
          src="mobileMenuIcon.png"
          width={"30px"}
          onClick={() => openMobileNav()}
          alt=""
        />
      </div>

      <div id="navItemsMobile">
        <img
          className="closeMenu"
          src="colseIcon.png"
          width={"30px"}
          onClick={() => closeMobileNav()}
          alt=""
        />

        <Link className="itemsMobile" to="/" onClick={() => closeMobileNav()}>
          ראשי
        </Link>
        <Link
          className="itemsMobile"
          to="/about"
          onClick={() => closeMobileNav()}
        >
          קצת עלי
        </Link>
        <Link
          className="itemsMobile"
          to="/web"
          onClick={() => closeMobileNav()}
        >
          אינטרנט
        </Link>
        <Link
          className="itemsMobile"
          to="/print"
          onClick={() => closeMobileNav()}
        >
          פרינט
        </Link>
        <Link
          className="itemsMobile"
          to="/branding"
          onClick={() => closeMobileNav()}
        >
          מיתוג
        </Link>
        <Link
          className="itemsMobile"
          to="/customers"
          onClick={() => closeMobileNav()}
        >
          לקוחות
        </Link>
        <Link
          className="itemsMobile"
          to="/signIn"
          onClick={() => closeMobileNav()}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
