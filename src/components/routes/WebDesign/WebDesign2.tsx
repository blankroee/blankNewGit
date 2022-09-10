import Gallery, { GalleryPic } from "../../Gallery/Gallery";
import "./WebDesign.css";
import { gsap } from "gsap";
import GalleryWeb from "../../Gallery/GalleryWeb";

export interface WebGalleryPic {
  id: number;
  title: string;
  imageSrc: string;
  web: string;
}

let webDesign1: WebGalleryPic[] = [
  {
    id: 1,
    title: "עיצוב ובניית אתר וורדפרס",
    imageSrc: "WDW1.jpg",
    web: "https://blank-site.com/AA/",
  },
  {
    id: 2,
    title: "עיצוב ובניית אתר וורדפרס",
    imageSrc: "WDW2.jpg",
    web: "https://blank-site.com/makeup/",
  },
  {
    id: 3,
    title: "עיצוב ובניית אתר וורדפרס",
    imageSrc: "WDW3.jpg",
    web: "https://bigmatan.com/",
  },
  {
    id: 4,
    title: "עיצוב ובניית אתר וורדפרס",
    imageSrc: "WDW4.jpg",
    web: "https://bonimpo.co.il/",
  },
  {
    id: 5,
    title: "עיצוב ובניית אתר וורדפרס",
    imageSrc: "WDW5.jpg",
    web: "https://www.mayarosenberg.co.il/",
  },
  {
    id: 6,
    title: "עיצוב ובניית אתר וורדפרס",
    imageSrc: "WDW6.jpg",
    web: "https://moranyehuda.co.il/",
  },
];

let webDesign2: GalleryPic[] = [
  {
    id: 7,
    title: "עיצוב ובניית דף נחיתה - השכרת רכב",
    imageSrc: "web-design-10.jpg",
  },
  {
    id: 8,
    title: "PRO-CAM - עיצוב ובניית חנות וורדפרס",
    imageSrc: "web-design-11.jpg",
  },
  {
    id: 9,
    title: "עיצוב ובניית דף נחיתה",
    imageSrc: "web-design-12.jpg",
  },
  {
    id: 10,
    title: "עיצוב ובניית אתר וורדפרס - בורדל טוטאל",
    imageSrc: "web-design-13.jpg",
  },
  {
    id: 11,
    title: "עיצוב ובניית דף נחיתה",
    imageSrc: "web-design-14.jpg",
  },
  {
    id: 12,
    title: "עיצוב ובניית מיניסייט לתערוכה של מוזיאון תל אביב",
    imageSrc: "web-design-15.jpg",
  },
  {
    id: 13,
    title: "ERA - עיצוב ובניית חנות וורדפרס",
    imageSrc: "web-design-16.jpg",
  },
  {
    id: 14,
    title: "Mausner - עיצוב ובניית חנות וורדפרס",
    imageSrc: "web-design-17.jpg",
  },
  {
    id: 15,
    title: "עיצוב ובניית דף נחיתה - סטודיו במה",
    imageSrc: "web-design-19.jpg",
  },
];

let posts: GalleryPic[] = [
  {
    id: 17,
    title: "עיצוב פוסט לפייסבוק - שלש",
    imageSrc: "post-1.jpg",
  },
  {
    id: 18,
    title: "עיצוב פוסט לפייסבוק - שלש",
    imageSrc: "post-2.jpg",
  },
  {
    id: 19,
    title: "עיצוב פוסט לפייסבוק - שלש",
    imageSrc: "post-3.jpg",
  },
  {
    id: 20,
    title: "עיצוב פוסט לפייסבוק - תוספות שיער",
    imageSrc: "post-4.jpg",
  },
  {
    id: 21,
    title: "עיצוב פוסט לפייסבוק - תוספות שיער",
    imageSrc: "post-5.jpg",
  },
];

let slideNumber: number;

export default function WebDesign() {
  window.scrollTo(0, 0);
  const TL = gsap.timeline({ repeat: -1 });

  return (
    <div>
      <div id="webSlider">
        <div id="sliderPic1">
          <img className="sliderPicAbsolute2" src="WD2.jpg" alt="" />
          <img className="sliderPicAbsolute3" src="WD3.jpg" alt="" />
          <img className="sliderPicAbsolute4" src="WD4.jpg" alt="" />

          <img
            onLoad={() => {
              TL.from(".sliderPicAbsolute2", {
                autoAlpha: 0,
                duration: 0.5,
                delay: 4,
              })
                .to(
                  "#BTN2",
                  {
                    opacity: 1,
                  },
                  "-=0.8"
                )
                .to("#BTN1, #BTN3, #BTN4", {
                  opacity: 0.6,
                })
                .to(".sliderPicAbsolute2", {
                  autoAlpha: 0,
                  duration: 0.5,
                  delay: 4,
                })

                .from(
                  ".sliderPicAbsolute3",
                  {
                    autoAlpha: 0,
                    duration: 0.5,
                    delay: 4,
                  },
                  "-=4.5"
                )
                .to(
                  "#BTN3",
                  {
                    opacity: 1,
                  },
                  "-=0.8"
                )
                .to("#BTN1, #BTN2, #BTN4", {
                  opacity: 0.6,
                })

                .to(".sliderPicAbsolute3", {
                  autoAlpha: 0,
                  duration: 0.5,
                  delay: 4,
                })

                .from(
                  ".sliderPicAbsolute4",
                  {
                    autoAlpha: 0,
                    duration: 0.5,
                    delay: 4,
                  },
                  "-=4.5"
                )
                .to(
                  "#BTN4",
                  {
                    opacity: 1,
                  },
                  "-=0.8"
                )
                .to("#BTN1, #BTN3, #BTN2", {
                  opacity: 0.6,
                })

                .to(".sliderPicAbsolute4", {
                  autoAlpha: 0,
                  duration: 0.5,
                  delay: 4,
                });
            }}
            className="sliderPic"
            src="WD1.jpg"
            alt=""
          />
        </div>
        <img
          src="BTN1.png"
          id="BTN1"
          onClick={() => {
            TL.kill();
            gsap.to(
              ".sliderPicAbsolute2, .sliderPicAbsolute3, .sliderPicAbsolute4",
              {
                autoAlpha: 0,
                visibility: 0,
              }
            );
            gsap.to("#BTN1", {
              opacity: 1,
            });
            gsap.to("#BTN2, #BTN3, #BTN4", {
              opacity: 0.6,
            });

            gsap.to(".sliderPicAbsolute1", {
              autoAlpha: 1,
              duration: 0.5,
            });
          }}
          alt=""
        />
        <img
          src="BTN2.png"
          id="BTN2"
          onClick={() => {
            TL.kill();
            gsap.to(".sliderPicAbsolute3, .sliderPicAbsolute4", {
              autoAlpha: 0,
              visibility: 0,
            });
            gsap.to("#BTN2", {
              opacity: 1,
            });
            gsap.to("#BTN1, #BTN3, #BTN4", {
              opacity: 0.6,
            });

            gsap.to(".sliderPicAbsolute2", {
              autoAlpha: 1,
              duration: 0.5,
            });
          }}
          alt=""
        />
        <img
          src="BTN3.png"
          id="BTN3"
          onClick={() => {
            TL.kill();
            gsap.to(".sliderPicAbsolute2, .sliderPicAbsolute4", {
              autoAlpha: 0,
              visibility: 0,
            });
            gsap.to("#BTN3", {
              opacity: 1,
            });
            gsap.to("#BTN2, #BTN1, #BTN4", {
              opacity: 0.6,
            });

            gsap.to(".sliderPicAbsolute3", {
              autoAlpha: 1,
              duration: 0.5,
            });
          }}
          alt=""
        />
        <img
          src="BTN4.png"
          id="BTN4"
          onClick={() => {
            TL.kill();
            gsap.to(".sliderPicAbsolute3, .sliderPicAbsolute2", {
              autoAlpha: 0,
              visibility: 0,
            });
            gsap.to("#BTN4", {
              opacity: 1,
            });
            gsap.to("#BTN2, #BTN3, #BTN1", {
              opacity: 0.6,
            });

            gsap.to(".sliderPicAbsolute4", {
              autoAlpha: 1,
              duration: 0.5,
            });
          }}
          alt=""
        />
        {/* <div className="sliderPic2"></div> */}
        {/* <div id="sliderPic3"></div> */}
        {/* <div id="sliderPic4"></div> */}
      </div>
      <div className="BG">
        <h2 className="kotarot">
          עיצוב ובניית אתרים | עיצוב ובניית דפי נחיתה | עיצוב פוסטים לרשתות
          חברתיות
        </h2>
        <GalleryWeb images={webDesign1} />
        <div className="empty"></div>
        <div className="WDBigPicture"></div>
        <div className="empty"></div>
        <Gallery images={posts} />
        <Gallery images={webDesign2} />
      </div>
    </div>
  );
}
