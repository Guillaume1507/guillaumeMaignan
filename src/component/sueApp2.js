import sueapp1 from "../picture/sueapp1.webp";
import sueapp2 from "../picture/sueapp2.webp";
import sueapp3 from "../picture/sueapp3.webp";
import sueapp4 from "../picture/sueapp4.webp";

function SueApp2(props) {
  let scrollPerAdjust = props.adjust;
  // console.log(scrollPerAdjust, "scroll adjust in sueapp2");

  let scrollPercentAdjust = scrollPerAdjust - 25;

  var imgStyle1 = {
    transform: `translate(0px,-${scrollPercentAdjust * 11}%)  `,
  };
  var imgStyle2 = {
    transform: `translate(0px,-${scrollPercentAdjust * 8}%)  scale(0.94) `,
  };
  var imgStyle3 = {
    transform: `translate(0px,-${scrollPercentAdjust * 5}%) scale(0.6)`,
  };
  var imgStyle4 = {
    transform: `translate(0px,-${scrollPercentAdjust * 6}%) scale(0.7) `,
  };

  return (
    <div>
      <img
        loading="lazy"
        className="photo1"
        src={sueapp1}
        alt="sueapp"
        style={imgStyle1}
      ></img>
      <img
        loading="lazy"
        className="photo2"
        src={sueapp3}
        alt="sueapp"
        style={imgStyle2}
      ></img>
      <img
        loading="lazy"
        className="photo3"
        src={sueapp2}
        alt="sueapp"
        style={imgStyle3}
      ></img>
      <img
        loading="lazy"
        className="photo4"
        src={sueapp4}
        alt="sueapp"
        style={imgStyle4}
      ></img>
    </div>
  );
}

export default SueApp2;
