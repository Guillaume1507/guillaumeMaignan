import picturedogg1 from "../picture/doginfos3_preview_rev_1.png";
import picturedogg2 from "../picture/landing-removebg-preview.png";
import picturedogg3 from "../picture/mapdoggies-removebg-preview-removebg-preview.png";
import picturedogg4 from "../picture/home_doggies-removebg-preview.png";
// import picturedogg5 from "../picture/doggies1bg.png";

function DoggiesApp(props) {
  let scrollPerAdjust = props.adjust;

  let scrollPercentAdjust = scrollPerAdjust - 10;

  var imgStyle1 = {
    transform: `translate(0px,-${scrollPercentAdjust * 7}%)  `,
  };
  var imgStyle2 = {
    transform: `translate(0px,-${scrollPercentAdjust * 5}%)  scale(0.94) `,
  };
  var imgStyle3 = {
    transform: `translate(0px,-${scrollPercentAdjust * 2.5}%) scale(0.6)`,
  };
  var imgStyle4 = {
    transform: `translate(0px,-${scrollPercentAdjust * 3}%) scale(0.7) `,
  };

  return (
    <div>
      <img
        loading="lazy"
        className="photo1"
        src={picturedogg1}
        alt="gym-together 1"
        style={imgStyle1}
      ></img>
      <img
        className="photo2"
        loading="lazy"
        src={picturedogg2}
        alt="gym-together 2"
        style={imgStyle2}
      ></img>
      <img
        loading="lazy"
        className="photo3"
        src={picturedogg3}
        alt="gym-together 3"
        style={imgStyle3}
      ></img>
      <img
        loading="lazy"
        className="photo4"
        src={picturedogg4}
        alt="gym-together 3"
        style={imgStyle4}
      ></img>
    </div>
  );
}

export default DoggiesApp;
