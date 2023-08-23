import { useEffect, useState } from "react";

import data from "./data";

function TextContent(props) {
  const [nameClass, setNameClass] = useState("hidden");
  let index = props.indexJ;

  // console.log(index, "inde coté text");
  // console.log("set name", nameClass);
  useEffect(() => {
    if (index === 0) {
      setNameClass("hidden");
      setTimeout(() => {
        setNameClass("show");
      }, 10);
    }
    if (index === 1) {
      setNameClass("hidden");

      setTimeout(() => {
        setNameClass("show");
      }, 10);
    }
    if (index === 2) {
      setNameClass("hidden");

      setTimeout(() => {
        setNameClass("show");
      }, 10);
    }
    if (index === 3) {
      setNameClass("hidden");

      setTimeout(() => {
        setNameClass("show");
      }, 10);
    }

    if (index === 4) {
      setNameClass("hidden");
    }
  }, [index]);

  let info = (
    <section className="appInfo">
      <div className={nameClass} id="number">
        <span>{data[index].number}</span>
      </div>
      <div className={nameClass} id="projectTitle">
        <span>{data[index].projectName}</span>
      </div>
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
