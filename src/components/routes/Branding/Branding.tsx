import Gallery, { GalleryPic } from "../../Gallery/Gallery";
import "../Print/Print.css";
import "./Branding.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let branding1: GalleryPic[] = [
  {
    id: 1,
    title: "עיצוב כרטיס ביקור - נופר חן בסון",
    imageSrc: "branding1.jpg",
  },
  {
    id: 2,
    title: "עיצוב לוגו - נופר חן בסון",
    imageSrc: "branding2.jpg",
  },
];

let branding2: GalleryPic[] = [
  {
    id: 3,
    title: "עיצוב לוגו - ד.ר. לידר - סוכנות ביטוח",
    imageSrc: "branding3.jpg",
  },
];

let branding3: GalleryPic[] = [
  {
    id: 4,
    title: "עיצוב לוגו - מוטי תורג'מן",
    imageSrc: "branding4.jpg",
  },
  {
    id: 5,
    title: "עיצוב ניירת - מוטי תורג'מן",
    imageSrc: "branding5.jpg",
  },
  {
    id: 6,
    title: "עיצוב כרטיס ביקור - מוטי תורג'מן",
    imageSrc: "branding6.jpg",
  },
];

let branding4: GalleryPic[] = [
  {
    id: 7,
    title: "עיצוב לוגו - ג.ס. בנייה והתחדשות עירונית",
    imageSrc: "branding7.jpg",
  },
  {
    id: 8,
    title: "עיצוב ניירת - ג.ס. בנייה והתחדשות עירונית",
    imageSrc: "branding8.jpg",
  },
  {
    id: 9,
    title: "עיצוב כרטיסי ביקור - ג.ס. בנייה והתחדשות עירונית",
    imageSrc: "branding9.jpg",
  },
  {
    id: 10,
    title: "עיצוב לוגו - המרכז לטכנולוגיות בחינוך המיוחד",
    imageSrc: "branding10.jpg",
  },
  {
    id: 11,
    title: "עיצוב לוגו - התוכניה",
    imageSrc: "branding11.jpg",
  },
  {
    id: 12,
    title: "עיצוב לוגו",
    imageSrc: "branding12.jpg",
  },
  {
    id: 13,
    title: "עיצוב לוגו - קישור",
    imageSrc: "branding13.jpg",
  },
  {
    id: 14,
    title: "ERA - עיצוב כרטיסי ביקור",
    imageSrc: "branding14.jpg",
  },
  {
    id: 15,
    title: "עיצוב כרטיסי ביקור - נוע-און - חברה לייצור נגררים",
    imageSrc: "branding15.jpg",
  },
  {
    id: 16,
    title: "עיצוב לוגו וכרטיס ביקור",
    imageSrc: "branding16.jpg",
  },
  {
    id: 17,
    title: "עיצוב לוגו - בוידעם - השכרת אביזרים וריהוט להפקות",
    imageSrc: "branding17.jpg",
  },
  {
    id: 18,
    title: "עיצוב לוגו",
    imageSrc: "branding18.jpg",
  },
];

export default function Branding() {
  window.scrollTo(0, 0);
  gsap.to(".h1Test", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".h1Test",
      // markers: true,
      start: "top center+=300",
      end: "bottom top",
      toggleActions: "play pause reverse reset",
    },
  });

  return (
    <div className="BG">
      <div className="headerDiv">
        <img className="fade-in-pic" src="brandingMainPic2.png" alt="" />

        <div>
          <h1 className="CustomerseH1">Branding</h1>
          <p>מיתוג</p>
        </div>
      </div>
      <h2 className="kotarot">
        עיצוב לוגו | עיצוב כרטיסי ביקור | עיצוב ניירת משרדית
      </h2>
      <Gallery images={branding1} />
      <Gallery images={branding2} />
      <Gallery images={branding3} />
      <div className="empty"></div>
      <div className="brandingBigPicture"></div>
      <div className="empty"></div>
      <Gallery images={branding4} />
    </div>
  );
}
