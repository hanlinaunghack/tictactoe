export default () =>
  new Array(3).fill(0).map((e, i) =>
    new Array(3).fill(0).map((el, j) => {
      return { row: i, column: j, value: null };
    })
  );
