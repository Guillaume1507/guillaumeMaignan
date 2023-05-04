import { useEffect, useState } from "react";
import TextContent from "./textContent";
import SueApp2 from "./sueApp2";
import LearnCursive from "./learnCursive";
import GymTogether from "./gymTogether";

function ImageContent() {
  const [scrollPercent, setScrollpercent] = useState(0);
  const [indexJ, setIndexJ] = useState(3);

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
    if (scrollPercent < 23) {
      setIndexJ(3);
    }
    if (scrollPercent > 23) {
      setIndexJ(0);
    }
    if (scrollPercent > 39) {
      setIndexJ(1);
    }
    if (scrollPercent > 55) {
      setIndexJ(2);
    }
    if (scrollPercent > 76) {
      setIndexJ(3);
    }
    setScrollpercent(sp);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  let scrollPercentAdjust = scrollPercent;

  return (
    <div className="projecto">
      <TextContent indexJ={indexJ} />
      <div className="rightSection">
        <div className="photoContainer">
          <GymTogether adjust={scrollPercentAdjust} />
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
