import React, { useState } from "react";
import { MainCategory } from "../routes/Home/Home";
import "./Gallery.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyLoad from "react-lazy-load";

gsap.registerPlugin(ScrollTrigger);

export interface GalleryPic {
  id: number;
  title: string;
  imageSrc: string;
}

let bigPic: GalleryPic = {
  id: 1,
  title: "עיצוב גלוייה",
  imageSrc: "Matan.jpg",
};

export default function Gallery(props: { images: GalleryPic[] }) {
  const [showFullImg, setShowFullImg] = useState(false);
  const [clickedImg, setClickedImg] = useState("");
  const [clickedImgTitle, setClickedImgTitle] = useState("");

  function GalleryItem(props: { anImage: GalleryPic }) {
    const { imageSrc, title } = props.anImage;

    return (
      <div className="viewGallery hover14">
        <figure>
          <img
            className="imgG"
            src={imageSrc}
            onClick={() => selectFullImg(imageSrc, title)}
          />
          <p className="imgText">{title}</p>
        </figure>
      </div>
    );
  }

  function selectFullImg(imageSrc: string, title: string) {
    setClickedImg(imageSrc);
    setClickedImgTitle(title);
    fullImg();
  }

  function fullImg() {
    if (showFullImg) setShowFullImg(false);
    else setShowFullImg(true);
  }

  return (
    <div className="gallery">
      {showFullImg && (
        <div className="darkBG">
          <div id="fullImgDiv">
            <img className="FullImg" src={clickedImg} alt="" />
            <h2 className="clickedImgH2">{clickedImgTitle}</h2>
            <LazyLoad height={762}>
              <img
                className="closeIcon"
                src="colseIcon.png"
                onClick={fullImg}
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
      )}

      {props.images.map((anImage) => (
        <GalleryItem key={anImage.id} anImage={anImage} />
      ))}
    </div>
  );
}
