import React, { Component } from "react";
import Header from "./header.jsx";
import Content from "./content";
class Test extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
      </React.Fragment>
    );
  }
}

export default Test;
