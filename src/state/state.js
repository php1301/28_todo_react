import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Nguyen",
      isLogin: false
    };
  }

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
    return this.state.isLogin ? (
      <div>Hello {this.state.username}</div>
    ) : (
      <button className="btn btn-success" onClick={this.hanleLogin}>
        Login
      </button>
    );
  };

  hanleLogin = () => {
    this.setState({
      isLogin: true
    });
  };

  render() {
    return (
      <div>
        <h3>*State</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
