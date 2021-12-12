import React from "react";
import PropTypes from "prop-types";
import "./RestaurantResultCard.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export const RESTAURANT_CARD_TYPE = {
  SEARCH: "search",
  SAVED: "saved",
};

export default class RestaurantResultCard extends React.Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired,
    addRestaurantToSaved: PropTypes.func,
    removeRestaurantFromSaved: PropTypes.func,
    moveRestaurantInSavedList: PropTypes.func,
    type: PropTypes.string.isRequired,
  };

  render() {
    const {
      restaurant,
      addRestaurantToSaved,
      removeRestaurantFromSaved,
      moveRestaurantInSavedList,
      type,
    } = this.props;
    return (
      <div className="restaurant-card">
        <Card>
          <CardHeader
            title={restaurant.name}
            subheader={
              restaurant.rating +
              " stars • " +
              restaurant.review_count +
              " reviews"
            }
          />
          <CardMedia
            className="card-image"
            component="img"
            image={restaurant.image_url}
          />
          <CardContent>
            <div>
              <span>
                {restaurant.categories.map(
                  (category) => category.title + " • "
                )}
              </span>{" "}
              <span>{restaurant.price}</span>
              <p>{restaurant.display_phone}</p>
            </div>
          </CardContent>
          <CardActions>
            {type === RESTAURANT_CARD_TYPE.SEARCH && (
              <div className="save-button">
                <Button
                  variant="contained"
                  onClick={() => addRestaurantToSaved(restaurant)}
                >
                  Save this Restaurant
                </Button>
              </div>
            )}
            {type === RESTAURANT_CARD_TYPE.SAVED && (
              <div className="save-button">
                <Button
                  variant="contained"
                  onClick={() => removeRestaurantFromSaved(restaurant.id)}
                >
                  Remove from Saved
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => moveRestaurantInSavedList(restaurant.id, true)}
                >
                  Move Up
                </Button>
                <Button
                  variant="outlined"
                  onClick={() =>
                    moveRestaurantInSavedList(restaurant.id, false)
                  }
                >
                  Move Down
                </Button>
              </div>
            )}
          </CardActions>
        </Card>
      </div>
    );
  }
}
