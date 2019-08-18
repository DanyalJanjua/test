import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const counters = this.props.counters;

    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            handleDel={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
