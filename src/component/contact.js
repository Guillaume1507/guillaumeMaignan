import { useState, useEffect } from "react";

import "..//style/contact.css";
import whatsapp from "../picture/whatsapp.png";
import mail from "../picture/mail.svg";
import linkdin from "../picture/linkedin.svg";
import insta from "../picture/insta.svg";
import git from "../picture/git.svg";
import twitter from "../picture/twitter.svg";

function Contact() {
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
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
    handleScroll();
  }, [scrollPercent]);
  // console.log(scrollPercent, "contact");
  var scrollY2 = Math.max(scrollPercent * 1.3);
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
        <a href="https://www.facebook.com/">
          <img className="icon" src={linkdin} alt="linkdin"></img>
        </a>
        <a href="https://www.facebook.com/">
          <img className="icon" src={insta} alt="instagram"></img>
        </a>
        <a href="https://github.com/Guillaume1507">
          <img className="icon" src={twitter} alt="gitHub"></img>
        </a>
        <a href="https://www.facebook.com/">
          <img className="icon" src={whatsapp} alt="whatsapp"></img>
        </a>
      </div>
    </section>
  );
}

export default Contact;
