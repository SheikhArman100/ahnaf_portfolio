/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import About from "./Components/About";
import Archive from "./Components/Archive";
import Books from "./Components/Books";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />

      <Home />
      <About />
      <Books />
      <Gallery />
      <Archive />
      <Contact />
    </div>
  );
}

export default App;
