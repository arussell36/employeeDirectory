import React from "react";
import "./style.css";

function DirContainer(props) {
  return (
    <div className="rowContainer">{props.children}</div>
  );
}

export default DirContainer;
