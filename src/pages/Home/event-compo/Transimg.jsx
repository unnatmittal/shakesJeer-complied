import React from "react";
import eventp from "./image/eventp.jpeg";
// import fresher from "./image/s2.png";
import Spoton_reso from "./image/Spoton_reso.png";
import LaughHoes from "./image/LaughHoes.png";
import comicwars_moksha from "./image/comicwars_moksha.png";
import sunlobhai_moksha from "./image/sunlobhai_moksha.png";
import Zombeloon_moksha from "./image/Zombeloon_moksha.png";

class Trans2 extends React.Component {
  constructor(props) {
    super(props);

    const images = [ LaughHoes,Spoton_reso,comicwars_moksha,sunlobhai_moksha,Zombeloon_moksha,eventp];

    this.state = {
      images,
      currentImg: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 5000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundImage() {
    let newCurrentImg = 0;
    const { images, currentImg } = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }

    this.setState({ currentImg: newCurrentImg });
  }

  render() {
    const { images, currentImg } = this.state;
    const urlString = `url('${images[currentImg]}')`;

    return (
      <div className="land-left" style={{ backgroundImage: urlString }}></div>
    );
  }
}

export default Trans2;
