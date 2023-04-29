import { useEffect, useState } from "react";
import TextContent from "./textContent";
import SueApp2 from "./sueApp2";
import LearnCursive from "./learnCursive";
import GymTogether from "./gymTogether";

// import data from "./data";

function ImageContent() {
  const [scrollPercent, setScrollpercent] = useState(0);
  const [indexJ, setIndexJ] = useState(0);
  // const [nameClass, setNameClass] = useState("hidden");

  useEffect(() => {
    // const observer = new IntersectionObserver((entries) => {
    // entries.forEach((entry) => {
    // entry.target.classList.add("show");

    // if (scrollPercent < 18) {
    //   setIndexJ(3);
    // }
    // if (scrollPercent > 18) {
    //   // entry.target.classList.remove("show");
    //   // function anim() {
    //   // entry.target.classList.add("show");
    //   setIndexJ(0);
    //   // }
    //   // window.requestAnimationFrame(anim);
    // }
    // if (scrollPercent > 35) {
    //   // entry.target.classList.remove("show");
    //   setIndexJ(1);
    //   // entry.target.classList.add("show");

    //   // requestAnimationFrame(anim);
    // }
    // if (scrollPercent > 50) {
    //   // entry.target.classList.remove("show");
    //   setIndexJ(2);
    //   // entry.target.classList.replace("show", "show");
    //   // entry.target.classList.add("show");
    // }
    // if (scrollPercent > 63) {
    //   setIndexJ(3);
    //   entry.target.classList.remove("show");
    // }

    // if (indexJ === 0) {
    //   entry.target.classList.remove("show");
    //   setTimeout(() => {
    //     entry.target.classList.add("show");
    //   }, 0);
    // }
    // if (indexJ === 1) {
    //   entry.target.classList.remove("show");
    //   setTimeout(() => {
    //     entry.target.classList.add("show");
    //   }, 0);
    // }
    // if (indexJ === 2) {
    //   entry.target.classList.remove("show");
    //   setTimeout(() => {
    //     entry.target.classList.add("show");
    //   }, 0);
    // }
    // });
    // });

    // const hiddenElements = document.querySelectorAll(".hidden");
    // hiddenElements.forEach((el) => observer.observe(el));

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
        // entry.target.classList.remove("show");
        // function anim() {
        // entry.target.classList.add("show");
        setIndexJ(0);
        // }
        // window.requestAnimationFrame(anim);
      }
      if (scrollPercent > 39) {
        // entry.target.classList.remove("show");
        setIndexJ(1);
        // entry.target.classList.add("show");

        // requestAnimationFrame(anim);
      }
      if (scrollPercent > 55) {
        // entry.target.classList.remove("show");
        setIndexJ(2);
        // entry.target.classList.replace("show", "show");
        // entry.target.classList.add("show");
      }
      if (scrollPercent > 76) {
        setIndexJ(3);
        // entry.target.classList.remove("show");
      }
      setScrollpercent(sp);

      window.addEventListener("scroll", handleScroll);
    };
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // console.log(indexJ, "indexj");
  });

  // let nameclass = "hidden";

  // if (indexJ === 0) {
  //   // entry.target.classList.remove("show");
  //   setTimeout(() => {
  //     // entry.target.classList.add("show");
  //   }, 0);
  // }
  // if (indexJ === 1) {
  //   // entry.target.classList.remove("show");
  //   setTimeout(() => {
  //     // entry.target.classList.add("show");
  //     setNameClass("show");
  //   }, 1);
  // }
  // if (indexJ === 2) {
  //   // setNameClass("hidden");
  //   // entry.target.classList.remove("show");
  //   setTimeout(() => {
  //     // entry.target.classList.add("show");
  //     setNameClass("show");
  //   }, 1);
  //   if (indexJ === 3) {
  //     // setNameClass("hidden");
  //     // entry.target.classList.remove("show");
  //     setTimeout(() => {
  //       // entry.target.classList.add("show");
  //       setNameClass("hidden");
  //     }, 1);
  //   }

  // console.log(scrollPercent, "scrollPercent");
  // let info = (
  //   <section className="appInfo">
  //     <p className={nameClass} id="number">
  //       {data[indexJ].number}
  //     </p>
  //     <p className={nameClass} id="projectTitle">
  //       {data[indexJ].projectName}
  //     </p>
  //     <p className="hidden" id="projectDesc">
  //       {data[indexJ].projectDesc}
  //     </p>
  //     <p className="hidden" id="projectSkills">
  //       {data[indexJ].projectType}
  //     </p>
  //   </section>
  // );

  let scrollPercentAdjust = scrollPercent;

  return (
    <div className="projecto">
      {/* {info} */}
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
