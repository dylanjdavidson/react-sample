import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { YELP_BASE_URL } from "./constants";

export default class Test extends React.Component {
  state = {
    resp: null,
  };

  componentDidMount() {
    fetch(YELP_BASE_URL + "term=restaurants&location=Denver", {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization:
          "Bearer V3445dhF47n4C6eCt7W2SZKHXFyg5fEo62rLF_pdVIBZ8yeFiHsA6tRLbycg8lt-AH7odVfXgquDNGJZUJQJLATATXDVZduMnOrBX8lgCcxuMmTgQ-FcPdzUGWG2YXYx",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("resp: ", data);
        this.setState({ resp: data });
      })
      .catch(console.log);
  }

  render() {
    const { resp } = this.state;
    return (
      <div>
        {resp &&
          resp.businesses.map((elem) => {
            return (
              <div className="resp-card">
                <Card>
                  <CardContent>
                    <p>{JSON.stringify(elem)}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
      </div>
    );
  }
}
