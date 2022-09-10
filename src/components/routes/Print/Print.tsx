import Gallery, { GalleryPic } from "../../Gallery/Gallery";
import "./Print.css";

let imagesPostCards: GalleryPic[] = [
  {
    id: 1,
    title: "עיצוב גלוייה למופע - מתן הגדול",
    imageSrc: "Matan.jpg",
  },
  {
    id: 2,
    title: "עיצוב גלוייה למופע - מתן הגדול",
    imageSrc: "Matan 2.jpg",
  },
  {
    id: 3,
    title: "עיצוב גלוייה למופע - מתן הגדול",
    imageSrc: "Matan 3.jpg",
  },
  {
    id: 4,
    title: "עיצוב גלוייה - מאוזנר",
    imageSrc: "mausnerPostCard1b.jpg",
  },
  {
    id: 5,
    title: "עיצוב גלוייה - מאוזנר",
    imageSrc: "mausnerPostCard2.jpg",
  },
];

let imagesCatalogs: GalleryPic[] = [
  {
    id: 6,
    title: "עיצוב קטלוג - קברט טוטאל",
    imageSrc: "cabaret-catalog-1-Copy.jpg",
  },
  {
    id: 7,
    title: "עיצוב קטלוג - קברט טוטאל",
    imageSrc: "cabaret-catalog-2-Copy.jpg",
  },
  {
    id: 8,
    title: "עיצוב קטלוג - קברט טוטאל",
    imageSrc: "cabaret-catalog-3-Copy.jpg",
  },
  {
    id: 9,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MCb1.jpg",
  },
  {
    id: 10,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MCb2.jpg",
  },
  {
    id: 11,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MCb3.jpg",
  },
  {
    id: 12,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MCb4.jpg",
  },
  {
    id: 13,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MCb5.jpg",
  },
  {
    id: 14,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MCb6.jpg",
  },
  {
    id: 15,
    title: "עיצוב פולדר",
    imageSrc: "PEFolder.jpg",
  },
  {
    id: 16,
    title: "עיצוב דפי קטלוג בתוך פולדר",
    imageSrc: "PECatalog.jpg",
  },
];

let imagesCatalogs2: GalleryPic[] = [
  {
    id: 17,
    title: "עיצוב גלוייה",
    imageSrc: "iamt-1.jpg",
  },
  {
    id: 18,
    title: "עיצוב פולדר",
    imageSrc: "iamt-2.jpg",
  },
  {
    id: 19,
    title: "עיצוב דפי קטלוג בתוך פולדר",
    imageSrc: "iamt-3.jpg",
  },

  {
    id: 20,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MC1.jpg",
  },
  {
    id: 21,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MC2.jpg",
  },
  {
    id: 22,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MC3.jpg",
  },
  {
    id: 23,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MC4.jpg",
  },
  {
    id: 24,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MC5.jpg",
  },
  {
    id: 25,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MC6.jpg",
  },
  {
    id: 26,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MC7.jpg",
  },
  {
    id: 27,
    title: "עיצוב קטלוג אופנה - מאוזנר",
    imageSrc: "MC8.jpg",
  },
];

let imagesBigSigns: GalleryPic[] = [
  {
    id: 28,
    title: "עיצוב שלט לחנות",
    imageSrc: "mausnerPoster1.jpg",
  },
  {
    id: 29,
    title: "עיצוב תמונת קיר לחנות אופנה",
    imageSrc: "mausnerPoster2.jpg",
  },
  {
    id: 30,
    title: "עיצוב פוסטר למבצע איסוף ותרומת בגדים",
    imageSrc: "mausnerPoster3.jpg",
  },

  {
    id: 31,
    title: "עיצוב שלט גג",
    imageSrc: "MausnerRoof1.jpg",
  },
  {
    id: 32,
    title: "עיצוב שלט גג",
    imageSrc: "MausnerRoof2.jpg",
  },
];

let imagesBigSigns2: GalleryPic[] = [
  {
    id: 33,
    title: "עיצוב שלטים לאירוע ההתרמה של עמותת עלם",
    imageSrc: "elem-rollups.jpg",
  },
];

let imagesBooks: GalleryPic[] = [
  {
    id: 34,
    title: "עיצוב ספר סיפור חיים אישי",
    imageSrc: "book2a.jpg",
  },
  {
    id: 35,
    title: "עיצוב ספר סיפור חיים אישי",
    imageSrc: "book2b.jpg",
  },
  {
    id: 36,
    title: "עיצוב ספר סיפור חיים אישי",
    imageSrc: "book2c.jpg",
  },
  {
    id: 37,
    title: "עיצוב דוח פעילות שנתי של עמותת עלם",
    imageSrc: "elem-doch_3.jpg",
  },
  {
    id: 38,
    title: "עיצוב דוח פעילות שנתי של עמותת עלם",
    imageSrc: "elem-doch_2.jpg",
  },
  {
    id: 39,
    title: "דוח עמותת עלם מוגש לנשיא ריבלין",
    imageSrc: "elem-doch_Rivlin.jpg",
  },
  {
    id: 40,
    title: "עיצוב דוח פעילות שנתי של עמותת עלם",
    imageSrc: "elem-peres3.jpg",
  },
  {
    id: 41,
    title: "עיצוב דוח פעילות שנתי של עמותת עלם",
    imageSrc: "elem-peres2.jpg",
  },
  {
    id: 42,
    title: "דוח עמותת עלם מוגש לנשיא פרס",
    imageSrc: "elem-peres.jpg",
  },
];

let invitations: GalleryPic[] = [
  {
    id: 43,
    title: "עיצוב הזמנה לחתונה",
    imageSrc: "invitation1.jpg",
  },
  {
    id: 44,
    title: "עיצוב הזמנה לחתונה",
    imageSrc: "invitation2.jpg",
  },
  {
    id: 45,
    title: "עיצוב כתובה ",
    imageSrc: "ktuba.jpg",
  },
];

let flyers: GalleryPic[] = [
  {
    id: 46,
    title: "עיצוב פלייר - עמותת עלם",
    imageSrc: "elem-flyer.jpg",
  },
  {
    id: 47,
    title: "עיצוב פלייר",
    imageSrc: "dani-flyer.jpg",
  },
  {
    id: 48,
    title: "עיצוב פלייר",
    imageSrc: "einat-flyer.jpg",
  },
];

export default function Print() {
  window.scrollTo(0, 0);

  return (
    <div className="BG">
      <div className="headerDiv">
        <img className="fade-in-pic" src="print-main-pic.png" alt="" />

        <div>
          <div className="koteretDiv">
            <h1 className="CustomerseH1">Print</h1>
          </div>
          <p>עיצוב מוצרי פרינט</p>
        </div>
      </div>
      <h2 className="kotarot">עיצוב גלויות | עיצוב הזמנות | עיצוב פליירים</h2>
      <Gallery images={imagesPostCards} />
      <Gallery images={invitations} />
      <Gallery images={flyers} />
      <div className="empty"></div>
      <div className="bigPicture"></div>
      <h2 className="kotarot">עיצוב ספרים | עיצוב חוברות</h2>
      <Gallery images={imagesBooks} />
      <h2 className="kotarot">עיצוב קטלוגים | עיצוב פולדר</h2>
      <Gallery images={imagesCatalogs} />
      <Gallery images={imagesCatalogs2} />
      <div className="empty"></div>
      <div className="bigPicture2"></div>
      <h2 className="kotarot">עיצוב שלטים ותמונות גדולות</h2>
      <Gallery images={imagesBigSigns} />
      <Gallery images={imagesBigSigns2} />

      {/* <img className="widePic" src="mausnerPostCard.jpg" alt="" /> */}
    </div>
  );
}
