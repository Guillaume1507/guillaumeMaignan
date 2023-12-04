import { useState, useEffect } from "react";

import "..//style/contact.css";
import whatsapp from "../picture/whatsapp.svg";
import mail from "../picture/mail.svg";
import linkdin from "../picture/linkedin.svg";
import insta from "../picture/insta.svg";
import git from "../picture/git.svg";
import twitter from "../picture/twitter.svg";

function Contact() {
  const [scrollPercent, setScrollpercent] = useState("");

  const handleScroll = (event) => {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp =
      (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
      100;
    // const minlimit =
    //   (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
    // if (sp >= minlimit && sp <= 100) {
    //   sp -= minlimit;
    //   // this.setState({ scrollPercent: sp });
    // }
    setScrollpercent(sp);
  };
  // handleScroll();
  // }, [scrollPercent]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPercent, "contact");
  var scrollY2 = scrollPercent * 1.25;
  var paraStyle = { transform: `translateX(${scrollY2}%)` };

  return (
    <section className="contactContainer">
      <div className="contactTitle" style={paraStyle}>
        CONTACT
      </div>
      <div className="iconContainer">
        <a href="https://github.com/Guillaume1507">
          <img className="icon" src={git} alt="gitHub"></img>
        </a>
        <a href="mailto:guillaume1507@hotmail.com">
          <img className="icon" src={mail} alt="mail"></img>
        </a>
        <a href="https://www.linkedin.com/in/guillaume-maignan-325aba263/">
          <img className="icon" src={linkdin} alt="linkdin"></img>
        </a>
        <a href="https://www.instagram.com/guillaumemaignan/">
          <img className="icon" src={insta} alt="instagram"></img>
        </a>
        <a href="https://github.com/Guillaume1507">
          <img className="icon" src={twitter} alt="gitHub"></img>
        </a>
        <a href="https://wa.me/+33623219644?text=Hi%20,i%20need%20a%20devs%20😀">
          <img className="icon" src={whatsapp} alt="whatsapp"></img>
        </a>
      </div>
    </section>
  );
}

export default Contact;
