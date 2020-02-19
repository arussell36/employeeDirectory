import React from "react";
import "./style.css";

function Header() {
    return <>
    {/* Header white space */}
    <div className="whiteSpace">
        <div className="name">
            Great Company Inc.
        </div>
    </div>

    {/* Nav Bar */}
    <div className="navbar">
        <div className="home" id="homeButton">
            <img className="icon" src={require("./homeIcon.png")} alt="Home Icon"></img>
        </div>
        <div className="home" id="button">
            TBD Button
        </div>

    </div>
    </>
}

export default Header;
