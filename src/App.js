import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentData from './StudentData'
import Student from './components/Student/Student'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      students: StudentData
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
