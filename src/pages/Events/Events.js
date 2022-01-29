import Main from "./Upcomingevents/Main";
import Photo from "./photo/photo";
import Video from "./video/videocomp";
import NewSlider from "./Slider/Index";
import "./Events.css";
function Events() {
  return (
    <div className="EventOuter">
      {/* <Index /> */}
      <NewSlider />
      <Main />
      <Photo />
      <Video />
    </div>
  );
}

export default Events;
