import React from "react";
import "./style.css"

function UserDirectory(props) {

    function search() {
        console.log("clicky!")
    }

    return (
        <>
        <div className="container">
            <div className="UDContainer">
                <div className="titleHead">
                    User Directory
                </div>
                <div className="desc">
                    Use the directory to locate employees within your company. Isolate your findings using the search parameter.
                </div>
                <div className="card">
                    <div className="cardText">
                        Name Search: <input className="searchBar"></input>
                    </div>

                <button className="submitButton" type="submit" onClick={() => {search()}}>
                        Search
                    </button>
                </div>
                <div className="output">
                    {props.children}
                </div>


            </div>
        </div>
        </>
    )
};

export default UserDirectory;