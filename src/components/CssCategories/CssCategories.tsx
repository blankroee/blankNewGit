import React from "react";
import Css3Div from "../Css3Div/Css3Div";
import { MainCategory } from "../routes/Home/Home";
import "./CssCategories.css";

export default function CssCategories(props: { categories: MainCategory[] }) {
  return (
    <div className="categories-container">
      {props.categories.map((category) => (
        <Css3Div key={category.id} category={category} />
      ))}
    </div>
  );
}
