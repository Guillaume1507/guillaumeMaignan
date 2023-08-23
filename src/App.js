import React, { Component } from "react";
import NameReveal from "./component/nameReaveal";
import TitleReaveal from "./component/titleReaveal";
import Skills from "./component/skills";
import ImageContent from "./component/imageContent";
import Contact from "./component/contact";
import Loading from "./component/loader";
import ".//style/App.css";
import AboutMe from "./component/aboutMe";

class App extends Component {
  state = { loading: true };
  componentWillMount() {
    // setTimeout(() => {
    this.setState({ loading: false });
    // }, 10000);
  }

  componentDidMount() {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
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
