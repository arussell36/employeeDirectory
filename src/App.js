import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Directory from "./Directory.json";

class App extends Component {
  // Setting this.state.Directory to the Directory json array
  state = {
    Directory
  };

  // Map over this.state.Directory and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Directory List</Title>
        {this.state.Directory.map(Directory => (
          <FriendCard
            id={Directory.id}
            key={Directory.id}
            firstName={Directory.firstName}
            lastName={Directory.lastName}
            department={Directory.department}
            title={Directory.title}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
