import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "./App.css";
import Restaurants from "./components/Restaurants";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      pageNumber: 0
    };
  }

  showPreviousResults = () => {
    const previousPageNumber = this.state.pageNumber - 1;
    fetch(
      `https://paris-restaurants-api.herokuapp.com/restaurants/?_page=${previousPageNumber}&_limit=15`
    )
      .then(response => response.json())
      .then(previousRestaurants => {
        this.setState({
          restaurants: previousRestaurants,
          pageNumber: previousPageNumber
        });
      });
  };

  showNextResults = () => {
    const nextPageNumber = this.state.pageNumber + 1;
    fetch(
      `https://paris-restaurants-api.herokuapp.com/restaurants/?_page=${nextPageNumber}&_limit=15`
    )
      .then(response => response.json())
      .then(nextRestaurants => {
        this.setState({
          restaurants: nextRestaurants,
          pageNumber: nextPageNumber
        });
      });
  };

  componentDidMount() {
    this.showNextResults();
  }

  render() {
    return (
      <div>
        <Restaurants restaurants={this.state.restaurants} />
        {this.state.pageNumber >= 2
          ? <Button onClick={this.showPreviousResults}>Page précédente</Button>
          : null
        }
        <Button onClick={this.showNextResults}>Page suivante</Button>
      </div>
    );
  }
}

export default App;
