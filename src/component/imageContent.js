import { useEffect, useState } from "react";
import TextContent from "./textContent";
import SueApp2 from "./sueApp2";
import LearnCursive from "./learnCursive";
import GymTogether from "./gymTogether";
import DoggiesApp from "./doggiesApp";

function ImageContent() {
  const [scrollPercent, setScrollpercent] = useState(0);
  const [indexJ, setIndexJ] = useState(4);

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
    }
    if (sp < 23) {
      setIndexJ(4);
    }
    if (sp > 19) {
      setIndexJ(0);
      setScrollpercent(sp);
    }
    if (sp > 34) {
      setIndexJ(1);
      setScrollpercent(sp);
    }
    if (sp > 48) {
      setIndexJ(2);
      setScrollpercent(sp);
    }
    if (sp > 63) {
      setIndexJ(3);
      setScrollpercent(sp);
    }
    if (sp > 79) {
      setIndexJ(4);
    }
    // setScrollpercent(sp);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  console.log(scrollPercent, "scrolp");
  let scrollPercentAdjust = scrollPercent;
  // this.setState({ scrollPercent: scrollPercent });

  return (
    <div className="projecto">
      <TextContent indexJ={indexJ} />
      <div className="rightSection">
        <div className="photoContainer">
          <GymTogether adjust={scrollPercentAdjust} />
        </div>
        <div className="photoContainer">
          <DoggiesApp adjust={scrollPercentAdjust} />
        </div>
        <div className="photoContainer">
          <SueApp2 adjust={scrollPercentAdjust} />
        </div>
        <div className="photoContainer">
          <LearnCursive adjust={scrollPercentAdjust} />
        </div>
      </div>
    </div>
  );
}

export default ImageContent;
