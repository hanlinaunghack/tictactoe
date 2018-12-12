import React from "react";
import { connect } from "react-redux";

class Turn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table className="scoreSheet">
        <thead>
          <tr>
            <th colSpan="2">Player</th>
            <th colSpan="2">Scores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="2" colSpan="2">
              {this.props.turn}
            </td>
            <td>X</td>
            <td>O</td>
          </tr>
          <tr>
            <td>{this.props.scoreX}</td>
            <td>{this.props.scoreO}</td>
          </tr>
          <tr />
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchAction: data => dispatch({ type: "DISPATCHACTION", data })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Turn);
