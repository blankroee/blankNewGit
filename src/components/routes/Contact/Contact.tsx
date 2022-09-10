import React, { useState } from "react";
import "./Contact.css";

export interface Person {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  date: Date;
}

export default function Contact() {
  const [myForm, setMyForm] = useState<Person>({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    date: new Date(),
  });

  const [contactsList, setContactsList] = useState<Person[]>([]);
  async function getAllContacts() {
    // const response = await fetch("http://127.0.0.1:5000/api/contacts/")
    const response = await fetch(
      "https://studio-blank.herokuapp.com/api/contacts/"
    )
      .then((response) => response.json())
      .then((data) => {
        setContactsList(data);
      });
  }

  function showContacts() {
    contactsList.map((curr, i) => {
      <p>dfvdfvd</p>;
    });
  }

  async function submitMyForm() {
    // setMyForm({ ...myForm, date: new Date() });
    const response = await fetch(
      "https://studio-blank.herokuapp.com/api/contacts/",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(myForm), // body data type must match "Content-Type" header
      }
    ).then((response) => console.log("****************************"));
  }

  return (
    <div className="BG contactPage">
      <div className="empty140px"></div>
      <h1 className="CustomerseH1">Contact me</h1>
      <h2 className="CustomerseH2">צרו קשר</h2>
      <a href="tel:0523492240">
        <h2 className="contactH2">רוצים לדבר? 052-3492240 (רועי)</h2>
      </a>

      <div className="ContactForm">
        <form onSubmit={() => console.log()}>
          <p className="contactP">
            אפשר גם להשאיר פרטים ואני אחזור אליכם בהקדם
          </p>
          <div className="splitRow">
            <input
              className="halfRow"
              type="text"
              name="fname"
              id="fname"
              placeholder="שם פרטי"
              onChange={(evn) => {
                setMyForm({ ...myForm, fName: evn.target.value });
                console.log(myForm);
              }}
            />
            <input
              className="halfRow"
              type="text"
              name="lname"
              id="lname"
              placeholder="שם משפחה"
              onChange={(evn) => {
                setMyForm({ ...myForm, lName: evn.target.value });
                console.log(myForm);
              }}
            />
          </div>
          <div>
            <input
              className="fullRow"
              type="email"
              name="email"
              id="email"
              placeholder="אימייל"
              onChange={(evn) => {
                setMyForm({ ...myForm, email: evn.target.value });
                console.log(myForm);
              }}
            />
          </div>
          <input
            className="fullRow"
            type="text"
            name="phone"
            id="phone"
            placeholder="מספר טלפון"
            onChange={(evn) => {
              setMyForm({ ...myForm, phone: evn.target.value });
              console.log(myForm);
            }}
          />
          <button className="submitBtn" onClick={() => submitMyForm()}>
            שליחה
          </button>
        </form>
        <img className="contactImg fade-in-pic" src="contact-pic.png" alt="" />
      </div>
      <button className="submitBtn" onClick={() => getAllContacts()}>
        הצג את כל הפניות
      </button>
      <div className="cListDiv">
        {contactsList.map((curr, i) => (
          <div key={i} className="oneContact">
            <div className="oneContactItem">
              <h3 className="cList">שם: {curr.fName}</h3>
            </div>
            <div className="oneContactItem">
              <h3 className="cList">שם משפחה: {curr.lName}</h3>
            </div>
            <div className="oneContactItem">
              <h3 className="cList">אימייל: {curr.email}</h3>
            </div>
            <div className="oneContactItem">
              <h3 className="cList">טלפון: {curr.phone}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
