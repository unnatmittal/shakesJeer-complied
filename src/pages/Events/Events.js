import Main from "./Upcomingevents/Main";
import card from "./Upcomingevents/card";
// import EventSlider from "./Slider/EventSlider";
import Photo from "./photo/photo";
import Video from "./video/videocomp";
import Slider from "./Slider/slider";
import "./Events.css";
function Events() {
  return (
      <div className="EventOuter">
      {/* <Index /> */}
        <Slider/>
        <Main />
        <Photo />
        <Video />
      </div>
  );
}

export default Events;
