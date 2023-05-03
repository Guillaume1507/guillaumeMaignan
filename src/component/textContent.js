import { useEffect, useState } from "react";

import data from "./data";

function TextContent(props) {
  const [nameClass, setNameClass] = useState("hidden");
  let index = props.indexJ;

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
      if (index === 3) {
        setNameClass("hidden");
      }
    }
  }, [index]);

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
