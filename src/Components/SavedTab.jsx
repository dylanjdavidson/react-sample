import React from "react";
import PropTypes from "prop-types";

import RestaurantResultCard, {
  RESTAURANT_CARD_TYPE,
} from "./restaurant/RestaurantResultCard";

export default class SavedTab extends React.Component {
  static propTypes = {
    savedRestaurants: PropTypes.array.isRequired,
    removeRestaurantFromSaved: PropTypes.func.isRequired,
    moveRestaurantInSavedList: PropTypes.func.isRequired,
  };

  render() {
    const {
      savedRestaurants,
      removeRestaurantFromSaved,
      moveRestaurantInSavedList,
    } = this.props;
    return (
      <div>
        {savedRestaurants.map((restaurant) => {
          return (
            <RestaurantResultCard
              restaurant={restaurant}
              type={RESTAURANT_CARD_TYPE.SAVED}
              removeRestaurantFromSaved={removeRestaurantFromSaved}
              moveRestaurantInSavedList={moveRestaurantInSavedList}
              key={restaurant.id}
            />
          );
        })}
      </div>
    );
  }
}
