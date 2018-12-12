import React from "react";
import { connect } from "react-redux";
import validator from "../algorithms/validator.js";

class Cells extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e) {
    e.preventDefault();
    var newPromise = new Promise((resolve, reject) => {
      if (this.props.cell.value === null) {
        resolve(this.props.dispatchAction(this.props.cell));
      }
    });
    newPromise.then(() => {
      if (validator(this.props.board) === true) {
        var winner = this.props.turn == "X" ? "O" : "X";
        alert(`${winner} won the game. ${this.props.turn} lost the game!`);
        this.props.scoreUpdate("score" + winner);
      }
    });
  }
  render() {
    return <td onClick={this.clickHandler}>{this.props.cell.value || "E"}</td>;
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    togggleTurn: () => dispatch({ type: "TURNTOGGLE" }),
    dispatchAction: data => dispatch({ type: "DISPATCHACTION", data }),
    scoreUpdate: data => dispatch({ type: "SCOREUPDATE", data })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cells);
