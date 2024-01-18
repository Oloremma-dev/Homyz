import Header from "./componenets/Header/Header";
import Hero from "./componenets/Hero/Hero";
import "./App.css"
import Companies from "./componenets/Companies/Companies";
import Residencies from "./componenets/Residencies/Residencies";
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
    </div>
  );
}

export default App;
