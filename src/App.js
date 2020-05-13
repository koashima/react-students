import React from 'react';
import logo from './logo.svg';
import './App.css';
import studentData from './StudentData'

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
        
        <Student />
      </div>
    );
  }
}

export default App;
