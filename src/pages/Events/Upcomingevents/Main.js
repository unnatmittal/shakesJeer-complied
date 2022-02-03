import React from "react";
import Card from "./card";
import Menu from "./menuApi";
// import Heading from "../../../components/Heading/heading";
const Main = () => {
  const [menuData] = React.useState(Menu);
  return (
    <div className="event-main">
      {/* <Heading name="Upcoming Events" /> */}
      <Card menuData={menuData} />
    </div>
  );
};
export default Main;
