import React, { Component } from "react";
// import Randomize from "randomatic";

class StartAGame extends Component {
  render() {
    // const randomCodeOne = Randomize("0", 2);
    // const randomCodeTwo = Randomize("0", 2);
    // const randomCodeThree = Randomize("0", 2);
    return (
      <div className="lobbyBtns">
        <div className="headline">
          <a href="#">
            <span>&#8592;</span>Back
          </a>
          <h1 className="lobby-acquire">Acquire</h1>
        </div>

        <a className="lobbyBtn1" href="" alt="start button">
          <p className="gameBtns">START A GAME WITH (1-5) FRIENDS</p>
        </a>
        <br />
        <a className="lobbyBtn2" href="" alt="join a game">
          <p className="gameBtns">JOIN A GAME</p>
        </a>
      </div>
    );
  }
}

export default StartAGame;
