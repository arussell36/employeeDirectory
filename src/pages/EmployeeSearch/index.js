import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Directory from "./Directory.json"
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import UserDirectory from "../../components/UserDirectory";

class EmployeeSearch extends Component {
  // Setting this.state.Directory to the Directory json array
  state = {
    Directory
  };

  // Map over this.state.Directory and render a FriendCard component for each friend object
  render() {
    return (
      <>
      <Header />
      <Wrapper> 
        <Sidebar />
        <UserDirectory />
      </Wrapper>
      </>
    );
  }
}

export default EmployeeSearch;
