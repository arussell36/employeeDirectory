import React from "react";
import "./style.css";

function DirHeader() {
  return (
    <>
    <button className="headData" id="firstName">
        First Name
    </button>
    <button className="headData" id="lastName">
        Last Name
    </button>
    <button className="headData" id="department">
        Department
    </button>
    <button className="headData" id="title">
        Title
    </button>
    </>
  );
}

export default DirHeader;


