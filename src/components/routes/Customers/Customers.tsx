import React from "react";
import CustomersGallery from "../../Gallery/CustomersGallery";
import Gallery, { GalleryPic } from "../../Gallery/Gallery";
import "./Customers.css";

let customers: GalleryPic[] = [
  {
    id: 1,
    title: "",
    imageSrc: "c-1.jpg",
  },
  {
    id: 2,
    title: "",
    imageSrc: "c-2.jpg",
  },
  {
    id: 3,
    title: "",
    imageSrc: "c-3.jpg",
  },
  {
    id: 4,
    title: "",
    imageSrc: "c-4.jpg",
  },
  {
    id: 5,
    title: "",
    imageSrc: "c-5.jpg",
  },
  {
    id: 6,
    title: "",
    imageSrc: "c-6.jpg",
  },
  {
    id: 7,
    title: "",
    imageSrc: "c-7.jpg",
  },
  {
    id: 8,
    title: "",
    imageSrc: "c-8.jpg",
  },
  {
    id: 9,
    title: "",
    imageSrc: "c-9.jpg",
  },
  {
    id: 10,
    title: "",
    imageSrc: "c-10.jpg",
  },
  {
    id: 11,
    title: "",
    imageSrc: "c-11.jpg",
  },
  {
    id: 12,
    title: "",
    imageSrc: "c-12.jpg",
  },
  {
    id: 13,
    title: "",
    imageSrc: "c-13.jpg",
  },
  {
    id: 25,
    title: "",
    imageSrc: "c-25.jpg",
  },
  {
    id: 26,
    title: "",
    imageSrc: "c-26.jpg",
  },

  {
    id: 14,
    title: "",
    imageSrc: "c-14.jpg",
  },
  {
    id: 15,
    title: "",
    imageSrc: "c-15.jpg",
  },
  {
    id: 16,
    title: "",
    imageSrc: "c-16.jpg",
  },
  {
    id: 17,
    title: "",
    imageSrc: "c-17.jpg",
  },
  {
    id: 18,
    title: "",
    imageSrc: "c-18.jpg",
  },
  {
    id: 19,
    title: "",
    imageSrc: "c-19.jpg",
  },
  {
    id: 20,
    title: "",
    imageSrc: "c-20.jpg",
  },
  {
    id: 21,
    title: "",
    imageSrc: "c-21.jpg",
  },
  {
    id: 22,
    title: "",
    imageSrc: "c-22.jpg",
  },
  {
    id: 23,
    title: "",
    imageSrc: "c-23.jpg",
  },
];

export default function Customers() {
  window.scrollTo(0, 0);

  return (
    <div className="BG">
      <div className="empty140px"></div>
      <h1 className="CustomerseH1">Customers</h1>
      <h2 className="CustomerseH2">לקוחות </h2>
      <CustomersGallery images={customers} />
    </div>
  );
}
