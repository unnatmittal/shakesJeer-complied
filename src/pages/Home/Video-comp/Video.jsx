import React from "react";
import "./Style.css";
import Menu from "./menuApi.jsx";
import Videocard from "./Videocard.jsx";
import Heading from "../../../components/Heading/heading.js";

const Video = () => {
  const [menuData] = React.useState(Menu);

  return (
    <>
      <Heading name="Our Imprints" />
      <Videocard menuData={menuData} />
    </>
  );
};

export default Video;
