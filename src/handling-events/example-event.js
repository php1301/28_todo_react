import React, { Component } from "react";

export default class ExampleEvents extends Component {
  username = "Nguyen";
  isLogin = false;

  /* Cach 1 */
  //   renderHTML = () => {
  //     if (this.isLogin) {
  //       return <div>Hello {this.username}</div>;
  //     } else {
  //       return <button className="btn btn-success">Login</button>;
  //     }
  //   };

  /* Cach 2 */
  renderHTML = () => {
    return this.isLogin ? (
      <div>Hello {this.username}</div>
    ) : (
      <button className="btn btn-success" onClick={this.hanleLogin}>
        Login
      </button>
    );
  };

  hanleLogin = () => {
    this.isLogin = true;
    console.log(this.isLogin);
  };

  render() {
    return (
      <div>
        <h3>*Example Events</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
