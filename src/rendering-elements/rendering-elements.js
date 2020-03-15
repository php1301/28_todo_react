import React, { Component } from "react";

export default class RenderingElements extends Component {
  name = "Cybersoft";
  username = "Phuc Nguyen";
  lop = "FE28";

  renderInfo = () => {
    return (
      <div>
        Họ tên: {this.username} - Lớp: {this.lop}
      </div>
    );
  };

  render() {
    return (
      <div>
        <h3>*Rendering Element</h3>
        {this.renderInfo()}
        <div>{this.name}</div>
        <div>{this.username}</div>
        <div>{this.lop}</div>
      </div>
    );
  }
}
