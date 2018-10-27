import React from "react";
import "./DeleteBtn.css";

const DeleteBtn = props => (
  <div><br></br>
  <button className="btn btn-info" {...props}>
    Delete
  </button>
  </div>
);

export default DeleteBtn;