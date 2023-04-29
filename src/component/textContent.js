import { useEffect, useState } from "react";

import data from "./data";

function TextContent(props) {
  // const [indexJ, setIndexJ] = useState(3);
  const [nameClass, setNameClass] = useState("hidden");

  let index = props.indexJ;

  useEffect(() => {
    console.log(index, "j coté text content");
    if (index === 0) {
      setNameClass("hidden");
      setTimeout(() => {
        setNameClass("show");
      }, 10);
    }
    if (index === 1) {
      setNameClass("hidden");
      // entry.target.classList.remove("show");
      setTimeout(() => {
        // entry.target.classList.add("show");
        setNameClass("show");
      }, 10);
    }
    if (index === 2) {
      setNameClass("hidden");
      // entry.target.classList.remove("show");
      setTimeout(() => {
        // entry.target.classList.add("show");
        setNameClass("show");
      }, 10);
      if (index === 3) {
        setNameClass("hidden");
        // entry.target.classList.remove("show");
        // setTimeout(() => {
        // entry.target.classList.add("show");
        //   setNameClass("hidden");
      }
    }
    // setIndexJ(index);
  }, [index]);

  //   console.log(indexJ, "j coté text content");
  let info = (
    <section className="appInfo">
      <p className={nameClass} id="number">
        {data[index].number}
      </p>
      <p className={nameClass} id="projectTitle">
        {data[index].projectName}
      </p>
      <p className={nameClass} id="projectDesc">
        {data[index].projectDesc}
      </p>
      <p className={nameClass} id="projectSkills">
        {data[index].projectType}
      </p>
    </section>
  );
  return info;
}

export default TextContent;
