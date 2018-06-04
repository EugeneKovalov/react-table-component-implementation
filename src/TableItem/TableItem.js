import React from "react";
import "./TableItem.css";

const tableItem = props => {
  return <td>
    <p>{props.title}</p>
    <input type="text" id="changeTitle" placeholder="Change Title" />
    <input type="button" id="changeConfirm" value="Change Confirm" />
    <input type="button" id="delete" value="Delete" />
  </td>;
};

export default tableItem;
