import React, { Component } from "react";
import ItemCard from "./item-card";

export default class ListCard extends Component {
  render() {
    return (
      <div className="row">
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    );
  }
}
