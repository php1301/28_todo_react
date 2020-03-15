import React, { Component } from "react";

export default class HandlingEvents extends Component {
  handlingEvent = () => {
    console.log("handlingEvent");
  };

  handlingEventParams = name => {
    console.log(name);
  };

  render() {
    return (
      <div>
        <h3>*Handling Events</h3>
        <button className="btn btn-success" onClick={this.handlingEvent}>
          Handling Events
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handlingEventParams("Nguyen");
          }}
        >
          Handling Events Params
        </button>
      </div>
    );
  }
}
