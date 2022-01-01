import React from "react";
import "./Style.css";
import Menu from "./menuApi.jsx";
import Videocard from "./Videocard.jsx";

const Video = () => {
  const [menuData, setMenuData] = React.useState(Menu);

  return (
    <>
      <Videocard menuData={menuData} />
    </>
  );
};

export default Video;
