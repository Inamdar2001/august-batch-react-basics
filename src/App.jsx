import "./App.css";
import { NavigationBar } from "./componets/Navigation";
import { Body } from "./componets/Body";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Navigation from "./componets/Fnavigation";
import About from "./componets/About";
import Dummy from "./componets/Dummy";

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Body />

      <div className="dummy-container">
        <Dummy />
      </div>
      <h1>react properies</h1>
    </div>
  );
}

export default App;
