import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  // use state returns array with two element current state and function that allows to update state
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 34 },
      { name: "sumuki", age: 34 }
    ],
    otherstate: "some other state"
  });
  // you can use two useState so that changing one state does not impact other
  const [otherSeperateState, setOtherState] = useState("other seperate value");

  // console.log(personState, otherSeperateState);
  // debugger;
  const switchNameHandler = () => {
    // console.log("hello wor");

    setPersonState({
      persons: [
        { name: "sonish", age: 34 },
        { name: "Manu", age: 34 },
        { name: "sumuki", age: 3 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hello react app</h1>
      <p>Hello world</p>
      <button onClick={switchNameHandler}> Switch Name </button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />

      <Person name="momo" age="10">
        This is inside person or ith is achildren hobby is playing
      </Person>
      <p>the other state-> {personState.otherstate}</p>
    </div>
  );

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
};

export default App;
