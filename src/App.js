import React from "react"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Credo from "./components/Credo/Credo"
import Skills from "./components/Skills/Skills"

function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <main>
        <About />
        <Credo />
        <Skills />
      </main>
    </div>
  );
}

export default App;
