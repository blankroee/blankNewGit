import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import React from "react";
import CssCategories from "../../CssCategories/CssCategories";
import Print from "../Print/Print";
import "./Home.css";
import { gsap } from "gsap";

export interface MainCategory {
  id: number;
  title: string;
  imageSrc: string;
  text: string;
  link: string;
}

let cssCategories: MainCategory[] = [
  {
    id: 1,
    title: "Web Design",
    imageSrc: "web-design.png",
    text: "עיצוב ובניית אתרי וורדפרס | עיצוב באנרים | עיצובים לרשתות חברתיות | react",
    link: "/web",
  },
  {
    id: 2,
    title: "Print",
    imageSrc: "print.png",
    text: "עיצוב חוברות וספרים | עיצוב גלויות | עיצוב שלטים | עיצוב קטלוגים",
    link: "/print",
  },
  {
    id: 3,
    title: "Branding",
    imageSrc: "logos.png",
    text: "עיצוב לוגו | כרטיסי ביקור | ניירת משרדית",
    link: "/branding",
  },
];

export default function Home() {
  return (
    <div>
      <div className="logoEffectWrap ">
        <div className="logoEffect desktopEffect">
          <img className="logoAnimation logoImg DE" src="Blogo-01.svg" alt="" />
          <img className="logoAnimation logoImg DE" src="Llogo-01.svg" alt="" />
          <img className="logoAnimation logoImg DE" src="Alogo-01.svg" alt="" />
          <img className="logoAnimation logoImg DE" src="Nlogo-01.svg" alt="" />
          <img className="logoAnimation logoImg DE" src="Klogo-01.svg" alt="" />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo1-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo2-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo3-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo4-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo5-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo6-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo7-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo8-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo9-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo10-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo11-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo12-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo13-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo14-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo15-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo16-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo17-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo18-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo19-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg DE2"
            src="logo20-01.svg"
            alt=""
            onLoad={() => {
              const TL = gsap.timeline();
              TL.fromTo(
                ".DE",
                { autoAlpha: 0, scale: 0 },
                {
                  autoAlpha: 1,
                  scale: 0.5,
                  duration: 0.5,
                  ease: "Power1.in",
                  stagger: 0.1,
                }
              )
                .fromTo(
                  ".DE2",
                  { autoAlpha: 0, scale: 0.5 },
                  {
                    autoAlpha: 1,
                    scale: 0.5,
                    duration: 0.1,
                    ease: "Power1.in",
                    stagger: 0.05,
                  }
                )

                .to(
                  ".logoImg",
                  {
                    delay: 3,
                    duration: 0.5,
                    opacity: 0,
                    display: "none",
                    visibility: 0,
                  },
                  "-=1"
                )
                .to(
                  ".logoEffect",
                  {
                    delay: 3,
                    duration: 1,
                    x: "100%",
                  },
                  "-=3.1"
                );
            }}
          />
        </div>
        <div className="logoEffect mobEffect">
          <img className="logoAnimation logoImg ME" src="Blogo-01.svg" alt="" />
          <img className="logoAnimation logoImg ME" src="Llogo-01.svg" alt="" />
          <img className="logoAnimation logoImg ME" src="Alogo-01.svg" alt="" />
          <img className="logoAnimation logoImg ME" src="Nlogo-01.svg" alt="" />
          <img className="logoAnimation logoImg ME" src="Klogo-01.svg" alt="" />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo1-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo2-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo3-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo4-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo5-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo6-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo7-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo8-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo9-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo10-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo11-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo12-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo13-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo14-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo15-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo16-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo17-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo18-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo19-01.svg"
            alt=""
          />
          <img
            className="logoAnimation2 logoImg ME2"
            src="logo20-01.svg"
            alt=""
            onLoad={() => {
              const TL = gsap.timeline();
              TL.fromTo(
                ".ME",
                { autoAlpha: 0, scale: 0 },
                {
                  autoAlpha: 1,
                  scale: 1.5,
                  duration: 0.5,
                  ease: "Power1.in",
                  stagger: 0.1,
                }
              )
                .fromTo(
                  ".ME2",
                  { autoAlpha: 0, scale: 1.5 },
                  {
                    autoAlpha: 1,
                    scale: 1.5,
                    duration: 0.1,
                    ease: "Power1.in",
                    stagger: 0.05,
                  }
                )

                .to(
                  ".logoImg",
                  {
                    delay: 3,
                    duration: 0.5,
                    opacity: 0,
                    display: "none",
                    visibility: 0,
                  },
                  "-=1"
                )
                .to(
                  ".logoEffect",
                  {
                    delay: 3,
                    duration: 1,
                    x: "100%",
                  },
                  "-=3.1"
                );
            }}
          />
        </div>
      </div>
      <CssCategories categories={cssCategories} />
    </div>
  );
}
