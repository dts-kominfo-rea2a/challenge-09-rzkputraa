// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  return (
    <div className="container">
      <div className="photo-container">
        <img className="photo" src={data.photo} alt="avatar" />
      </div>
      <div className="details">
        <h2>{data.name}</h2>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </div>
      <div className="mail">
        <a href={"mailto:" + data.email} target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M.026 24l11.974-11.607 11.974 11.607h-23.948zm11.964-23.961l-11.99 8.725v12.476l7.352-7.127-5.653-4.113 10.291-7.488 10.309 7.488-5.655 4.108 7.356 7.132v-12.476l-12.01-8.725z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contact;
