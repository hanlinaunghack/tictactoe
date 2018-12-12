import Board from "../algorithms/letThereBeBoard.js";
import Chop from "../algorithms/chop.js";

const init = {
  board: Board(),
  turn: "X",
  scoreX: 0,
  scoreO: 0
};

const Reducer = (state = init, action) => {
  switch (action.type) {
    case "DISPATCHACTION":
      let result = Chop(state.board, action.data, state.turn);
      let obj = { board: result };
      obj.turn = state.turn == "X" ? "O" : "X";
      obj.scoreX = state.scoreX;
      obj.scoreO = state.scoreO;
      return obj;
    case "SCOREUPDATE":
      let score = { scoreX: state.scoreX, scoreO: state.scoreO };
      score[action.data]++;
      return { ...state, scoreX: score.scoreX, scoreO: score.scoreO };
    case "TURNTOGGLE":
      let turn = state.turn == "X" ? "O" : "X";
      return { ...state, turn };
    default:
      return state;
  }
};

export default Reducer;
