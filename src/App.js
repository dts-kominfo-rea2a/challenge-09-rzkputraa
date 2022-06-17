import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import contacts from "./data/contacts.json";

const App = () => {
  // console.log(contacts);
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "5px",
        }}
      >
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
        <Contact data={contacts[3]} />
        <Contact data={contacts[4]} />
        <Contact data={contacts[5]} />
      </div>
    </div>
  );
};

export default App;
