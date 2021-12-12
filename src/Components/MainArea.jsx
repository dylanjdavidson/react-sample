import React from "react";
import "./MainArea.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import SearchTab from "./SearchTab";
import SavedTab from "./SavedTab";

import { getYelpBusinessResponse, moveElement } from "./helpers";

function TabPanel(props) {
  // render contents of active tab
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {children}
    </div>
  );
}

export default class MainArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: 0,
      restaurantsResponse: {},
      savedRestaurants: [],
    };
  }

  searchForRestaurants = async (params) => {
    const resp = await getYelpBusinessResponse(params);
    this.setState({ restaurantsResponse: resp });
  };

  addRestaurantToSaved = (restaurant) => {
    const saved = [...this.state.savedRestaurants];
    if (!saved.some((elem) => elem.id === restaurant.id)) {
      saved.push(restaurant);
      this.setState({ savedRestaurants: saved });
    }
  };

  removeRestaurantFromSaved = (restaurantId) => {
    const saved = [...this.state.savedRestaurants];
    const updatedSaved = saved.filter((restaurant) => {
      return restaurant.id !== restaurantId;
    });
    this.setState({ savedRestaurants: updatedSaved });
  };

  moveRestaurantInSavedList = (restaurantId, moveUp) => {
    const saved = [...this.state.savedRestaurants];
    const index = saved.find((elem) => elem.id === restaurantId);
    const updatedSaved = moveElement(saved, index, moveUp);
    this.setState({ savedRestaurants: updatedSaved });
  };

  handleTabChange = (event, newValue) => {
    this.setState({ activeTabIndex: newValue });
  };

  render() {
    const { activeTabIndex, restaurantsResponse, savedRestaurants } =
      this.state;
    return (
      <div>
        <header>
          <h1>Restaurant Browser</h1>
        </header>
        <div>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              centered
              value={activeTabIndex}
              onChange={this.handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab label="Search" />
              <Tab label="Saved Restaurants" />
            </Tabs>
          </Box>
          <TabPanel value={activeTabIndex} index={0}>
            <SearchTab
              searchForRestaurants={this.searchForRestaurants}
              addRestaurantToSaved={this.addRestaurantToSaved}
              restaurantsResponse={restaurantsResponse}
            />
          </TabPanel>
          <TabPanel value={activeTabIndex} index={1}>
            <SavedTab
              savedRestaurants={savedRestaurants}
              removeRestaurantFromSaved={this.removeRestaurantFromSaved}
              moveRestaurantInSavedList={this.moveRestaurantInSavedList}
            />
          </TabPanel>
        </div>
        {/* <div className="card-container">
          <Card>
            <CardContent>
              <p>card text</p>
            </CardContent>
          </Card>
        </div> */}
      </div>
    );
  }
}
