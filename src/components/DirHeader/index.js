import React from "react";
import "./style.css";

function DirHeader() {

  function orderFirst() {
    console.log('wowee were gonna order by first name')
  }

  function orderLast() {
    console.log('whoa hoo order by last name')
  }

  function orderDept() {
    console.log('interesting order by dept')
  }

  function orderTitle() {
    console.log('hoke doke order by title')
  }

  return (
    <>
    <button className="headData" id="firstName" onClick={() => orderFirst()}>
        First Name
    </button>
    <button className="headData" id="lastName" onClick={() => orderLast()}>
        Last Name
    </button>
    <button className="headData" id="department" onClick={() => orderDept()}>
        Department
    </button>
    <button className="headData" id="title" onClick={() => orderTitle()}>
        Title
    </button>
    </>
  );
}

export default DirHeader;


