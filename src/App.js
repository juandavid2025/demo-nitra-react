import React, { Component } from "react";
import Header from "./components/Header";
import Title from "./components/Title/Title";
import Attacks from "./components/Attacks/Attacks";
import Weaknesses from "./components/Weaknesses/Weaknesses";
import "./App.css";

class App extends Component {
  state = {
    showAttacks: false,
    showWeaknesses: false,
  };

  toggleShowAttacks = () => {
    const newValue = !this.state.showAttacks;
    this.setState({ showAttacks: newValue });
  };

  toggleShowWeaknesses = () => {
    const newValue = !this.state.showWeaknesses;
    this.setState({ showWeaknesses: newValue });
  };

  render() {
    let weaknesses = null;
    if (this.state.showWeaknesses) {
      weaknesses = <Weaknesses />;
    }
    return (
      <div>
        <Header
          attacksClicked={this.toggleShowAttacks}
          weaknessesClicked={this.toggleShowWeaknesses}
        />
        <Title />
        {this.state.showAttacks ? <Attacks /> : null}
        {weaknesses}
      </div>
    );
  }
}

export default App;
