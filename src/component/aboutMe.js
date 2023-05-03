import { useState, useEffect } from "react";

function AboutMe() {
  const [scrollPercent, setScrollpercent] = useState("");

  const handleScroll = (event) => {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp =
      (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
      100;
    const maxlimit =
      (documentElement.clientHeight * 150) / documentElement.scrollHeight;
    if (sp >= 0 && sp <= maxlimit) {
      // this.setState({ scrollPercent: sp });
      setScrollpercent(sp);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  var scrollY2 = scrollPercent * 2.5;
  var paraStyle = { transform: `translateX(${scrollY2}%)` };

  return (
    <div>
      <p className="aboutme">
        Highly motivated full-stack developer with expertise in designing and
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
