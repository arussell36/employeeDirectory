import React from "react";
import "./style.css";

function DirRow(props) {
  return (
    <>
    <div className="data">
        {props.firstName}
    </div>
    <div className="data">
        {props.lastName}
    </div>
    <div className="data">
        {props.department}
    </div>
    <div className="data">
        {props.title}
    </div>
    </>
  );
}

export default DirRow;


