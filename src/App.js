import React, { Component } from "react";
import Header from "./components/Header";
import Title from "./components/Title/Title";
import Attacks from "./components/Attacks/Attacks";
import Weaknesses from "./components/Weaknesses/Weaknesses";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    showAttacks: false,
    showWeaknesses: false,
  };

  // toggleShowAttacks = () => {
  //   const newValue = !this.state.showAttacks;
  //   this.setState({ showAttacks: newValue });
  // };

  // toggleShowWeaknesses = () => {
  //   const newValue = !this.state.showWeaknesses;
  //   this.setState({ showWeaknesses: newValue });
  // };

  render() {
    // let weaknesses = null;
    // if (this.state.showWeaknesses) {
    //   weaknesses = <Weaknesses />;
    // }
    return (
      <Router>
        <div>
          <Header
          // attacksClicked={this.toggleShowAttacks}
          // weaknessesClicked={this.toggleShowWeaknesses}
          />
          <Title />
          <Switch>
            <Route exact path="/attacks">
              <Attacks />
            </Route>
            <Route exact path="/weaknesses">
              <Weaknesses />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
