import React from "react";
import "./About.css";

export default function About() {
  window.scrollTo(0, 0);

  return (
    <div className="BG">
      <div className="textAndPic">
        <div className="textDiv">
          <h2 className="rightOrCenter">About me</h2>
          <p className="aboutTextMobile">
            היי, קוראים לי רועי בלנק יניב. אני מעצב גרפי ובונה אתרים. <br></br>
            אני עובד בתחום העיצוב והפרסום כבר למעלה מ-10 שנים ועבדתי ב-3 במשרדי
            פרסום.<br></br> <br></br>היום אני עובד כעצמאי, אדון לעצמי בעסק משלי
            - סטודיו בלנק. אני גם אבא של שני הילדים הכי חמודים בעולם (ככה יצא…)
          </p>{" "}
          <p className="aboutText">
            היי, קוראים לי רועי בלנק יניב. אני מעצב גרפי ובונה אתרים. <br></br>
            אני עובד בתחום העיצוב והפרסום כבר למעלה מ-10 שנים ועבדתי ב-3 במשרדי
            פרסום.<br></br> היום אני עובד כעצמאי, אדון לעצמי בעסק משלי - סטודיו
            בלנק.<br></br> אני גם אבא של שני הילדים הכי חמודים בעולם (ככה יצא…)
          </p>
        </div>
        <div className="myPic fade-in"></div>
      </div>
    </div>
  );
}
