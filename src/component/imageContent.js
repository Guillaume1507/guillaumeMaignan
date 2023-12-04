import { useEffect, useState } from "react";
import TextContent from "./textContent";
import SueApp2 from "./sueApp2";
// import LearnCursive from "./learnCursive";
import GymTogether from "./gymTogether";
import DoggiesApp from "./doggiesApp";
import SunsetMatches from "./SunsetMatches";

function ImageContent() {
  const [scrollPercent, setScrollPercent] = useState(0);
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
      setScrollPercent(sp);
    }
    if (sp > 34) {
      setIndexJ(1);
      setScrollPercent(sp);
    }
    if (sp > 48) {
      setIndexJ(2);
      setScrollPercent(sp);
    }
    if (sp > 63) {
      setIndexJ(3);
      setScrollPercent(sp);
    }
    if (sp > 79) {
      setIndexJ(4);
    }
  };

  useEffect(() => {
    let animationFrameId;

    const handleScrollThrottled = () => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          handleScroll();
          animationFrameId = null;
        });
      }
    };

    window.addEventListener("scroll", handleScrollThrottled);

    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollPercent, indexJ]);

  console.log(scrollPercent, "scrollPercent");
  let scrollPercentAdjust = scrollPercent;

  return (
    <div className="projecto">
      <TextContent indexJ={indexJ} />
      <div className="rightSection">
        <div className="photoContainer">
          <SunsetMatches adjust={scrollPercentAdjust} />
        </div>
        <div className="photoContainer">
          <GymTogether adjust={scrollPercentAdjust} />
        </div>
        <div className="photoContainer">
          <DoggiesApp adjust={scrollPercentAdjust} />
        </div>
        <div className="photoContainer">
          <SueApp2 adjust={scrollPercentAdjust} />
        </div>
      </div>
    </div>
  );
}

export default ImageContent;
