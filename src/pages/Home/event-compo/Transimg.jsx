import React from "react";
import openmic from "./image/openmic.png";
// import fresher from "./image/s2.png";
import e2 from "./image/e2.jpg";
import e3 from "./image/e3.jpg";
// import e4 from "./image/revent.png";
import e5 from "./image/eventp.jpeg"

class Trans2 extends React.Component {
  constructor(props) {
    super(props);

    const images = [e5,e3, e2, openmic];

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
