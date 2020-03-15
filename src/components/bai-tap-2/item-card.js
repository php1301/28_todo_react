import React, { Component } from "react";

export default class ItemCard extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://picsum.photos/200/300"
            alt="Cardimagecap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#abc" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
