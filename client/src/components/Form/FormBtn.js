import React from "react";

export const FormBtn = props => (
  <button type="button" className="btn btn-info" id="submit" {...props}>
    {props.children}
  </button>
);