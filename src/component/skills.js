import { useState, useEffect } from "react";
import "..//style/skills.css";

function Skills() {
  const [scrollPercent, setScrollpercent] = useState("");

  const handleScroll = () => {
    const { body, documentElement } = window.document;

    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp =
      (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
      100;
    // const minlimit =
    //   (documentElement.clientHeight * 950) / documentElement.scrollHeight;
    // const maxlimit =
    //   (documentElement.clientHeight * 1180) / documentElement.scrollHeight;
    // if (sp >= minlimit && sp <= maxlimit + 3) {
    //   sp -= minlimit;
    // }
    setScrollpercent(sp);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(scrollPercent, "skills");

  var scrollY2 = Math.max(scrollPercent * 1.5);
  var paraStyle = { transform: `translateX(-${scrollY2}%)` };

  return (
    <div className="skillsContainer">
      <div className="skillTittle" style={paraStyle}>
        Skills
      </div>
      <div className="skillsList">
        <div>
          Design DataBase
          <br />
          Frontend & Backend
          <br />
          Redux
          <br />
          <br />
          Figma
          <br />
          MongoDB
          <br />
          AWS
          <br />
        </div>
        <div>
          Responsive & Adaptive Design
          <br />
          Styling Architecture
          <br />
          UI Maintenance
          <br />
          <br />
          JavaScript
          <br />
          React / React Native
          <br />
          Node JS
          <br />
        </div>
      </div>
    </div>
  );
}

export default Skills;
