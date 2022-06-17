import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <div className="header-container">
        <Header />
        <span
          style={{
            fontWeight: "bold",
            color: "snow",
          }}
        >
          ********************************************************************
        </span>
      </div>
      <div className="contact-container">
        {contacts.map((contactss, index) => (
          <Contact data={contactss} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
