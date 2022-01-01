import React from "react";
import openmic from "./image/openmic.jpg";
import fresher from "./image/fresher2.jpg";

class Trans2 extends React.Component {
  constructor(props) {
    super(props);

    const images = [
      fresher,
      openmic
    ];

    this.state = {
      images,
      currentImg: 0
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
      
        <div
          className="left" 
          style={{ backgroundImage: urlString }}
        ></div>
    );
  }
}

export default Trans2;
