import React, { Component } from "react";

import { Button } from "@nwgweb/react-components";

export default class App extends Component {
  render() {
    const activateLasers = () => {
      console.log("Lasers activated");
    };

    return (
      <Button mode="pill" size={35} color="red" onClick={activateLasers}>
        Activate lasers
      </Button>
    );
  }
}
