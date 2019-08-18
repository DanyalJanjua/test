import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";
class App extends Component {
  state = {
    counters: [{ id: 1, value: 2 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };
  handleDec = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value !== 0) {
      counters[index].value = counters[index].value - 1;
    }
    this.setState({ counters });
  };
  onReset = () => {
    const counters = [...this.state.counters];
    for (let i = 0; i < counters.length; i++) {
      counters[i].value = 0;
    }
    this.setState({ counters });
  };
  handleInc = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDel = counterID => {
    console.log("In " + counterID);
    const counters = this.state.counters.filter(function(counter) {
      return counterID !== counter.id;
    });
    console.log(counters);
    this.setState({ counters });
    // this.state.counters.filter()
  };
  render() {
    return (
      <React.Fragment>
        <NavBar countValue={this.state.counters.length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleInc}
            onDecrement={this.handleDec}
            onDelete={this.handleDel}
            onReset={this.onReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
