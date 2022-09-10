import React, { useState } from "react";
import { MainCategory } from "../routes/Home/Home";
import "./Gallery.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface WebGalleryPic {
  id: number;
  title: string;
  imageSrc: string;
  web: string;
}

let bigPicWeb: WebGalleryPic = {
  id: 1,
  title: "עיצוב גלוייה",
  imageSrc: "Matan.jpg",
  web: "",
};

export default function GalleryWeb(props: { images: WebGalleryPic[] }) {
  const [showFullImg, setShowFullImg] = useState(false);
  const [clickedImg, setClickedImg] = useState("");
  const [clickedImgTitle, setClickedImgTitle] = useState("");
  const [clickedImgWeb, setClickedImgWeb] = useState("");

  function GalleryItem(props: { anImage: WebGalleryPic }) {
    const { imageSrc, title, web } = props.anImage;

    return (
      <div className="viewGallery hover14">
        <figure>
          <a href={web} target={"_blank"}>
            <img className="imgG" src={imageSrc} />
          </a>
          <p className="imgText">{title}</p>
        </figure>
      </div>
    );
  }

  return (
    <div className="gallery">
      {props.images.map((anImage) => (
        <GalleryItem key={anImage.id} anImage={anImage} />
      ))}
    </div>
  );
}
