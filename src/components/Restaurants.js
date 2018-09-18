import React from "react";
import { Card, Container, Grid, Image, Rating } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "./Restaurants.css";

const Restaurants = ({ restaurants }) => {
  return (
    <Container>
      <Grid stackable columns={3} centered>
        {restaurants.map((restaurant, i) => (
          <Grid.Column key={i}>
            <a href={restaurant.to_website} target="_blank">
              <Card fluid link>
                <Image src={restaurant.image_url} />
                <Card.Content>
                  <Card.Header>{restaurant.name}</Card.Header>
                  <Card.Meta>
                    {restaurant.mainCategory}{" "}
                    {restaurant.secondaryCategory
                      ? `(${restaurant.secondaryCategory})`
                      : null}
                    <Rating
                      className="restaurant-rating"
                      defaultRating={restaurant.editorial_rating}
                      disabled
                      maxRating={5}
                    />
                  </Card.Meta>
                  <Card.Description>
                    {restaurant.description
                      ? restaurant.description
                      : `${restaurant.annotation.slice(0, 100)}…`}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <address>
                    <strong className="restaurant-area">
                      {restaurant.area}
                    </strong>
                    {restaurant.address}, {restaurant.city}
                  </address>
                </Card.Content>
              </Card>
            </a>
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
};

export default Restaurants;
