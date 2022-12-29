import React, { Component } from "react";

const textArray = [
  "A good laugh is sunshine in the house.Resonanz'22 is all set to kick off in less than 48 hours and Shakesjeer is all set to present another event in its association, LaughHoes. ",
  "ShakesJeer is back, yet again to lighten the mood and this time to re-ignite and re-kindle that talent of yours.Be it Rap, Poetry, Beatbox, Stand-up, Shayari (Hope it sounds better than this one).The stage is set for you to be spontaneous and be SPOT-ON.",
  "For a comedy to work, magic has to happen,Carrying on with our events for Moksha-Inno’’22, we present you all to our another flagship event for the upcoming fest, Comic Wars. ",
  "Comedy is simply a funny way of being serious.ShakesJeer is proud to highlight the magnificent success of our very first open mic event in this year 2022. A huge interest and enthusiasm were to be seen among our audience ",
  "Continuing with our events, we now introduce you all to another flagship event for the upcoming fest, in our event Zombieloon ",
  "Tired of mind numbing classes and continuous exams? Want to make this friday as your Funday? ShakesJeer brings to you their spellbinding open mic event - Comedy Knight where various performers will entertain you with their comic sketches"
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
