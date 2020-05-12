import React, {Component} from "react";
import Randomize from "randomatic";

class WaitingRoom extends Component {
  render() {
    const randomCodeOne = Randomize("0", 2);
    const randomCodeTwo = Randomize("0", 2)
    const randomCodeThree = Randomize("0", 2)
    return (
      <div>
        <div className="headline">
          <a href="#">
            <span>&#8592;</span>Back
          </a>
          <h1 className="lobby-acquire">Acquire</h1>
        </div>
        <h1 className="code">
          {randomCodeOne}-{randomCodeTwo}-{randomCodeThree}
        </h1>
        <p className="code">
          Give this code to your game friends. When they join, you will see them
          appear below!
        </p>
        <div className="player"></div>
      </div>
    );
  }
}

export default WaitingRoom;
