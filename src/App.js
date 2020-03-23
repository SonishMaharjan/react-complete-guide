import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello react app</h1>
        <p>Hello world</p>
        <Person name="photo" age="23" />
        <Person name="sonish" age="23" />
        <Person name="sumuki" age="12" />
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
