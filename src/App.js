import logo from './logo.svg';
import './App.css';
import React from "react";

const lab = React({
  stud_id : "101328279",
  my_name : "Janine Mae Usana",
  school : "George Brown College",
  location : "Toronto"
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab Exercise</h2>
        <h3>{lab.stud_id}</h3>
        <h4>{lab.my_name}</h4>
        <h5>{lab.school}, {lab.location}</h5>
      </header>
      

    </div>
  );
}

export default App;
