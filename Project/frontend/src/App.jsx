import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    // <div className="App">
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Home />
            <About />
            <Footer />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <NavBar />
            <Contact />
            <Footer />
          </>
        }
      />
    </Routes>
    // </div>
  );
}

export default App;
