import activities from "../picture/activities.png";
import julia from "../picture/julia.png";
import sunsetmatches from "../picture/sunsetmatches.png";
import profil from "../picture/profil.png";

function SunsetMatches(props) {
  let scrollPerAdjust = props.adjust;

  let scrollPercentAdjust = scrollPerAdjust - 5;

  var imgStyle1 = {
    transform: `translate(0px,-${scrollPercentAdjust * 12}%)   scale(1.4) `,
  };
  var imgStyle2 = {
    transform: `translate(0px,-${scrollPercentAdjust * 9}%)  scale(1.2) `,
  };
  var imgStyle3 = {
    transform: `translate(0px,-${scrollPercentAdjust * 5}%) scale(1.1)`,
  };
  var imgStyle4 = {
    transform: `translate(0px,-${scrollPercentAdjust * 6}%) scale(1) `,
  };

  return (
    <div>
      <img
        loading="lazy"
        className="photo1"
        src={activities}
        alt="sunsetMatches 1"
        style={imgStyle1}
      ></img>
      <img
        className="photo2"
        loading="lazy"
        src={julia}
        alt="sunsetMatches 2"
        style={imgStyle2}
      ></img>
      <img
        loading="lazy"
        className="photo3"
        src={profil}
        alt="sunsetMatches 3"
        style={imgStyle3}
      ></img>
      <img
        loading="lazy"
        className="photo4"
        src={sunsetmatches}
        alt="sunsetMatches 3"
        style={imgStyle4}
      ></img>
    </div>
  );
}

export default SunsetMatches;
