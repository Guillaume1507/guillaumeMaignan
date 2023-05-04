import React, { Component } from "react";
import NameReveal from "./component/nameReaveal";
import TitleReaveal from "./component/titleReaveal";
import Skills from "./component/skills";
import ImageContent from "./component/imageContent";
import Contact from "./component/contact";
// import SueApp from "./component/sueApp";
// import LearnCursive from "./component/learnCursive";
import ".//style/App.css";
import AboutMe from "./component/aboutMe";

class App extends Component {
  componentDidMount() {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NameReveal />
          <TitleReaveal />
        </header>
        <section>
          <AboutMe />
        </section>
        <ImageContent />
        <Skills />
        <Contact />
      </div>
    );
  }
}
export default App;
