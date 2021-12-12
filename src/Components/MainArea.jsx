import React from "react";
import "./MainArea.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Test from "./Test";

function TabPanel(props) {
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
    };
  }

  handleTabChange = (event, newValue) => {
    this.setState({ activeTabIndex: newValue });
  };

  render() {
    const { activeTabIndex } = this.state;
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
            <Test />
          </TabPanel>
          <TabPanel value={activeTabIndex} index={1}>
            tab 2
          </TabPanel>
        </div>
        <div className="card-container">
          <Card>
            <CardContent>
              <p>card text</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
