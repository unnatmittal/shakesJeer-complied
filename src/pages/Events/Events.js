import Main from "./Upcomingevents/Main";
import card from "./Upcomingevents/card";
// import EventSlider from "./Slider/EventSlider";
import Index from "./Slider/Index"
import Photo from "./photo/photo";
import Video from "./video/videocomp";
function Events() {
  return (
  
      <div className="EventOuter">
        <Index />
        <Main />
        <Photo />
        <Video />
      </div>

  );
}

export default Events;
