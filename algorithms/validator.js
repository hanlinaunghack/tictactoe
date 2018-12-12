const validator = board => {
  if (horizontalCheck(board) || verticalCheck(board) || diagonalCheck(board)) {
    return true;
  }
  return false;
};

function horizontalCheck(arr) {
  for (var i = 0; i < 3; i++) {
    if (
      arr[i][0].value == arr[i][1].value &&
      arr[i][0].value == arr[i][2].value &&
      arr[i][0].value != null
    ) {
      return true;
    }
  }
  return false;
}

function verticalCheck(arr) {
  for (var index = 0; index < 3; index++) {
    if (
      arr[0][index].value == arr[1][index].value &&
      arr[0][index].value == arr[2][index].value &&
      arr[0][index].value != null
    )
      return true;
  }
  return false;
}

function diagonalCheck(arr) {
  if (arr[1][1] != null) {
    if (
      arr[1][1].value == arr[0][0].value &&
      arr[1][1].value == arr[2][2].value
    )
      return true;
    if (
      arr[0][2].value == arr[1][1].value &&
      arr[0][2].value == arr[2][0].value
    )
      return true;
  }

  return false;
}

export default validator;
