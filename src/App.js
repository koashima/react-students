import React from 'react';
import logo from './logo.svg';
import './App.css';
import studentData from './StudentData'
import Student from './components/Student/Student'
studentData

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      students: studentData
    }
  }
  
  render() { 
    return (
      <div className="App">
        <Student students={this.state.students}/>
      </div>
    );
  }
}

export default App;
