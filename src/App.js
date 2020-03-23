import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 34 },
      { name: "sumuki", age: 34 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hello react app</h1>
        <p>Hello world</p>
        <button> Switch Name </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />

        <Person name="momo" age="10">
          This is inside person or ith is achildren hobby is playing
        </Person>
      </div>
    );
  }
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement(
  //     "h1",
  //     { className: "App" },
  //     "i must be inside teh headin 1 tag"
  //   ),
  //   "hey im a react app"
  // );
}

export default App;
