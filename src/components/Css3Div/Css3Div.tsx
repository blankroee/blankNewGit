import React from "react";
import { Link } from "react-router-dom";
import { MainCategory } from "../routes/Home/Home";
import "./Css3Div.css";

export default function Css3Div(props: { category: MainCategory }) {
  const { imageSrc, title, text, link } = props.category;

  return (
    <div className="view view-tenth">
      <img src={imageSrc} />
      <div className="mask">
        <div className="maskContent">
          <h2>{title}</h2>
          <p>{text}</p>
          <Link className="info" to={link}>
            לצפייה בעבודות
          </Link>
        </div>
      </div>
    </div>
  );
}
