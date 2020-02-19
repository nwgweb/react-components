import React, { Component } from "react";

import { Button, Card } from "@nwgweb/react-components";

export default class App extends Component {
  render() {
    const activateLasers = () => {
      console.log("Lasers activated");
    };

    return (
      <Card title="Card title">
        <Button mode="pill" size={35} color="red" onClick={activateLasers}>
          Activate lasers
        </Button>
      </Card>
    );
  }
}
