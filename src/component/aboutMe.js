import { useState, useEffect } from "react";

function AboutMe() {
  const [scrollPercent, setScrollpercent] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const { body, documentElement } = window.document;

      const sd = Math.max(body.scrollTop, documentElement.scrollTop);
      let sp =
        (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
        100;
      const minlimit =
        (documentElement.clientHeight * 950) / documentElement.scrollHeight;
      const maxlimit =
        (documentElement.clientHeight * 1180) / documentElement.scrollHeight;
      if (sp >= minlimit && sp <= maxlimit + 3) {
        sp -= minlimit;
        // this.setState({ scrollPercent: sp });
      }
      setScrollpercent(sp);
      window.addEventListener("scroll", handleScroll);
    };
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  // console.log(scrollPercent, "skills");

  var scrollY2 = scrollPercent * 1.7;
  var paraStyle = { transform: `translateX(${scrollY2}%)` };

  return (
    <div>
      <p className="aboutme">
        Experienced full-stack developer with expertise in designing and
        implementing scalable web applications using modern technologies and
        frameworks
      </p>
      <div className="myWork" style={paraStyle}>
        MY WORK
      </div>
    </div>
  );
}

export default AboutMe;
