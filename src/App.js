import React, { Component } from "react";
import DirContainer from "./components/DirContainer";
import DirRow from "./components/DirRow";
import DirHeader from "./components/DirHeader";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Directory from "./Directory.json";
import Header from "./components/Header";
class App extends Component {
  // Setting this.state.Directory to the Directory json array
  state = {
    Directory
  };

  // Map over this.state.Directory and render a FriendCard component for each friend object
  render() {
    return (
      <Header />


      // <Wrapper>
      //   <Title />

      //   <DirContainer>
      //     <DirHeader />
      //   </DirContainer>
        
      //   {this.state.Directory.map(Directory => (
      //     <DirContainer>
      //       <DirRow
      //       id={Directory.id}
      //       key={Directory.id}
      //       firstName={Directory.firstName}
      //       lastName={Directory.lastName}
      //       department={Directory.department}
      //       title={Directory.title}
      //       />
      //     </DirContainer>
      //   ))}
      // </Wrapper>
    );
  }
}

export default App;
