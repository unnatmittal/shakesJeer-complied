import React from "react";
import "./Style.css";
import Menu from "./menuApi.jsx";
import Videocard from "./Videocard.jsx";
import Heading from "../sponsor-comp/heading";

const Video = () => {
  const [menuData, setMenuData] = React.useState(Menu);

  return (
    <>
      <Heading name="Our Contribution" />
      <Videocard menuData={menuData} />
    </>
  );
};

export default Video;
