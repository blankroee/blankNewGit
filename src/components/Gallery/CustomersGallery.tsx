import React from "react";
import { GalleryPic } from "./Gallery";
import "./CustomersGallery.css";

export default function CustomersGallery(props: { images: GalleryPic[] }) {
  function GalleryItem(props: { anImage: GalleryPic }) {
    const { imageSrc } = props.anImage;
    return (
      <div className="viewCustomersGallery hover14">
        <figure>
          <img className="imgG" src={imageSrc} />
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
