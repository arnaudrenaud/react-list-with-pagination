import React, { Component } from "react";
import "./App.css";
import Restaurants from "./components/Restaurants";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    fetch("https://paris-restaurants-api.herokuapp.com/restaurants/")
      .then(response => response.json())
      .then(restaurants => {
        this.setState({ restaurants });
      });
  }

  render() {
    return (
      <div>
        <Restaurants restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
