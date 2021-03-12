import React, { Component } from 'react';
import Header from "./components/Header";
import Title from "./components/Title/Title";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component{

  render(){
    return <div>
      <Header />
      <Title />
    </div>
  }
}

export default App;

