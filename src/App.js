import React from "react";
import Homepage from "./components/homepage";
import About from "./components/about";
import Articles from "./components/articles";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Homepage />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
