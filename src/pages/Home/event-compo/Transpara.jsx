import React, { Component } from "react";

const textArray = [
  "This video also promoted shakesjeer within the campus as we are a relatively new society and people didn't knew much about us before the video. The video has over 13k views on YouTube. It also helped us to gain instagram followers.",
  "The event was a great success with an audience of over 300 students. We gave opportunity to budding artists to perform in front of live audience. The event gave college students a break from there hectic schedule. The event also helped us build connections with DU colleges.",
  "icbwivbwknlknojbcibdcivlllllcbdjlcncoicifuckkkkkoffff",
];

class Trans3 extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 5000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      //   <p className="trans-para">
      //  <span>{textThatChanges}</span>
      //   </p>
      // <p>hello</p>
      <div>
        <p className="land-trans-para">
          <span className="dimag-kharab">{textThatChanges}</span>
        </p>
      </div>
    );
  }
}

export default Trans3;
