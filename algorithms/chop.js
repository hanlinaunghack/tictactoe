const chop = (array, value, mark) => {
  var newArray = array.map(e => e.map(el => el));
  var row = value.row;
  var column = value.column;
  newArray[row][column].value = mark;
  return newArray;
};
export default chop;
