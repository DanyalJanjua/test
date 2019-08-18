import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  formatCount(value) {
    const count = value;
    return value === 0 ? "Zero" : count;
  }
  getBadgeClass(value) {
    let classes = "badge m-2 badge-";
    return (classes += value === 0 ? "warning" : "primary");
  }
  render() {
    const counter = this.props.counter;
    console.log(counter.value);
    return (
      <div>
        <span className={this.getBadgeClass(counter.value)}>
          {" "}
          {this.formatCount(counter.value)}
        </span>
        <button
          className="btn btn-secendary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>

        <button
          className="btn btn-info btn-sm m-2"
          onClick={() => this.props.onDecrement(counter)}
        >
          Decrement
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.handleDel(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
