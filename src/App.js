import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "./App.css";
import Restaurants from "./components/Restaurants";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      pageNumber: 1,
    };
  }

  componentDidMount() {
    fetch("https://paris-restaurants-api.herokuapp.com/restaurants/?_page=1&_limit=15")
      .then(response => response.json())
      .then(restaurants => {
        this.setState({ restaurants });
      });
  }

  showNextResults = () => {
    const nextPageNumber = this.state.pageNumber + 1
    fetch(`https://paris-restaurants-api.herokuapp.com/restaurants/?_page=${nextPageNumber}&_limit=15`)
      .then(response => response.json())
      .then(restaurants => {
        this.setState({
          restaurants: [...this.state.restaurants, ...restaurants],
          pageNumber: nextPageNumber
        });
      });
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
