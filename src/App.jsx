import Header from "./componenets/Header/Header";
import Hero from "./componenets/Hero/Hero";
import "./App.css"
import Companies from "./componenets/Companies/Companies";
import Residencies from "./componenets/Residencies/Residencies";
import Values from "./componenets/Values/Values";
import Contact from "./componenets/Contact/Contact";
import GetStarted from "./componenets/GetStarted/GetStarted";
import Footer from "./componenets/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div> 
       <Companies />
      <Residencies />
      <Values />
      <Contact />
      <GetStarted />
      <Footer /> 
    </div>
  );
}

export default App;
