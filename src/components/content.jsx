import "./styles.css";
import React, { Component } from "react";
class Content extends Component {
  render() {
    return (
      <section class="section-a">
        <div class="container">
          <div>
            <h1>The headphones of the future.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
              commodi placeat ea itaque modi corrupti corporis nam voluptas aut
              reprehenderit eaque culpa.
            </p>
            <a href="#" class="btn">
              Read More
            </a>
          </div>
          <img src="https://i.ibb.co/37Y74kv/showcase.jpg" alt="" />
        </div>
      </section>
    );
  }
}

export default Content;
