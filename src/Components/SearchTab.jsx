import React from "react";
import PropTypes from "prop-types";
import "./SearchTab.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import RestaurantResultCard, {
  RESTAURANT_CARD_TYPE,
} from "./restaurant/RestaurantResultCard";

export default class SearchTab extends React.Component {
  static propTypes = {
    searchForRestaurants: PropTypes.func.isRequired,
    addRestaurantToSaved: PropTypes.func.isRequired,
    restaurantsResponse: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      textFieldValue: "San Jose",
    };
  }

  handleLocationTextFieldChange = (event) => {
    this.setState({
      textFieldValue: event.target.value,
    });
  };

  render() {
    const { searchForRestaurants, addRestaurantToSaved, restaurantsResponse } =
      this.props;
    const { textFieldValue } = this.state;
    return (
      <div>
        <div className="search-bar">
          <TextField
            className="search-entry"
            id="outlined-helperText"
            label="Location"
            defaultValue={textFieldValue}
            onChange={this.handleLocationTextFieldChange}
          />
          <Button
            className="search-button"
            variant="contained"
            onClick={() => searchForRestaurants({ location: textFieldValue })}
          >
            Search For Restaurants
          </Button>
        </div>
        {restaurantsResponse?.businesses &&
          restaurantsResponse.businesses.map((restaurant) => {
            return (
              <RestaurantResultCard
                restaurant={restaurant}
                addRestaurantToSaved={addRestaurantToSaved}
                type={RESTAURANT_CARD_TYPE.SEARCH}
                key={restaurant.id}
              />
            );
          })}
      </div>
    );
  }
}
