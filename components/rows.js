import React from "react";
import Cells from "./cells";

export default props => {
  return (
    <tr>
      {props.value.map((e, i) => (
        <Cells cell={e} keys={i} />
      ))}
    </tr>
  );
};
