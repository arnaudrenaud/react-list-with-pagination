import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "./App.css";
import Restaurants from "./components/Restaurants";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      pageNumber: 0,
    };
  }

  showNextResults = () => {
    const nextPageNumber = this.state.pageNumber + 1
    fetch(`https://paris-restaurants-api.herokuapp.com/restaurants/?_page=${nextPageNumber}&_limit=15`)
      .then(response => response.json())
      .then(nextRestaurants => {
        this.setState({
          restaurants: [...this.state.restaurants, ...nextRestaurants],
          pageNumber: nextPageNumber
        });
      });
  }

  componentDidMount() {
    this.showNextResults()
  }

  render() {
    return (
      <div>
        <Restaurants restaurants={this.state.restaurants} />
        <Button onClick={this.showNextResults}>Voir les résultats suivants</Button>
      </div>
    );
  }
}

export default App;
