import React, { Component } from "react";

const textArray = [
  "Are your exams causing you to feel down? Let SHAKESJEER land that strike!! Shakesjeer returns with an exciting open mic event that is sure to liven up your day. ",
  "Shakesjeer was delighted to conduct our flagship event “Comic Verse” for NSUT'Thon to keep all the freshers  filled with the maximum exuberance during the Fresher’s week. The event witnessed a grand success with participation of more than 150 teams.",
  "ShakesJeer brings to you its debut vlog, which was shot at After-hours Café, City Centre Mall, Dwarka.It shows how our superfun Open Mics operate and also includes the backstage preparations and the radiating laughter that warmed up the venue.",
  "The event was a great success with an audience of over 300 students. We gave opportunity to budding artists to perform in front of live audience. The event gave college students a break from there hectic schedule. The event also helped us build connections with DU colleges.",
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
