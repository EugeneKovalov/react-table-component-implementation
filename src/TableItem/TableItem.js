import React from "react";
import "./TableItem.css";

const tableItem = props => {
  return (
    <tr>
      <td>
        <p>{props.title}</p>
        <input type="text" className="changeTitle" placeholder="Change Title" />
        <input type="button" id="changeConfirm" value="Change Confirm" onClick={props.changeTitle} />
        <input type="button" id="delete" value="Delete" onClick={props.delete} />
      </td>
    </tr>
  );
};

export default tableItem;
