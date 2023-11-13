import React from "react";
// import Homepage from "./components/homepage";
// import About from "./components/about";
// import Articles from "./components/articles";
// import Footer from "./components/footer";
import lab from "./assets/lab.txt"

function App() {
  return(
    <div className="App">
      {/* <Homepage />
      <About />
      <Articles />
      <Footer /> */}
      <a href={lab} download="lab.txt">
          Download
      </a>
    </div>
  );
}

export default App;
