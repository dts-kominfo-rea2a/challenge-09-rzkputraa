// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./css/contact.css";

const Contact = ({ data }) => {
  return (
    <div className="container">
      <div className="photo-container">
        <img className="photo" src={data.photo} alt="avatar" />
      </div>
      <div className="details">
        <h2 style={{ margin: 0 }}>{data.name}</h2>
        <p style={{ margin: 0 }}>{data.phone}</p>
        <p style={{ margin: 0 }}>{data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
