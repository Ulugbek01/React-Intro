// import logo from "./logo.svg";
// import "./App.css";

// function TestStudent() {
//   return (
//     <div className="App">
//       <h1>Hello App</h1>
//     </div>
//   );
// }

// function Student() {
//   return (
//     <div className="App">
//       <h1>Student Component</h1>
//     </div>
//   );
// }

// export default TestStudent;
// export { Student, TestStudent };

import React from "react";

class Student extends React.Component {
  render() {
    return <h1>React Component</h1>;
  }
}

export default Student;
