import React, {useState} from "react";
import "./style.css"
import DirContainer from "../DirContainer";
import DirHeader from "../DirHeader";
import DirRow from "../DirRow";
import Directory from "../../pages/EmployeeSearch/Directory.json"


function UserDirectory(props) {

    const [searchbar, setSearchBar] = useState('');

    let userBase = Directory;

    const results = userBase.filter(employee =>
        employee.firstName.toLowerCase().indexOf(searchbar.toLowerCase()) !== -1
    );

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(searchbar);
        console.log(results);
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
                    <form onSubmit={handleSubmit}>
                        <div className="cardText">
                            Name Search:   
                                <input
                                className="searchBar"
                                type="text" 
                                placeholder="Search Name" 
                                name="searchbar" 
                                onChange={e => setSearchBar(e.target.value)}
                                />
                        </div>

                        <button className="submitButton" type="submit">
                            Search
                        </button>
                    </form>
                </div>
                <div className="output">
                <DirContainer>
                    <DirHeader />
                </DirContainer>
                {results.map(Directory => (
                    <DirContainer>
                        <DirRow
                            id={Directory.id}
                            key={Directory.id}
                            firstName={Directory.firstName}
                            lastName={Directory.lastName}
                            department={Directory.department}
                            title={Directory.title}
                        />
                    </DirContainer>
                ))}
                </div>       
            </div>
        </div>
        </>
    )
};

export default UserDirectory;