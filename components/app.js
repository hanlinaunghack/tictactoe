import React from "react";
import Rows from "./rows";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table className="board">
          <tbody>
            {this.props.board.map((e, i) => (
              <Rows value={e} keys={i} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    togggleTurn: () => dispatch({ type: "TURNTOGGLE" })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
