import React, { Component } from "react";

export default class BaitapCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/imgRedCar.jpg"
    };
  }

  handleChangeColor = color => {
    let img = "";
    switch (color) {
      case "red":
        img = "./img/imgRedCar.jpg";
        break;
      case "silver":
        img = "./img/imgSilverCar.jpg";
        break;
      case "black":
        img = "./img/imgBlackCar.jpg";
        break;
      default:
        img = "./img/imgRedCar.jpg";
        break;
    }

    this.setState({
      img
    });
  };

  render() {
    const style = {
      backgroundColor: "black",
      color: "white"
    };

    return (
      <div>
        <h3>*Bài tập Car</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <img className="img-fluid" src={this.state.img} alt="" />
            </div>
            <div className="col-sm-7">
              <button
                className="btn btn-danger mr-2"
                onClick={() => {
                  this.handleChangeColor("red");
                }}
              >
                Red
              </button>
              <button
                className="btn mr-2"
                style={{ ...style, backgroundColor: "silver" }}
                onClick={() => {
                  this.handleChangeColor("silver");
                }}
              >
                Silver
              </button>
              <button
                className="btn mr-2"
                style={style}
                onClick={() => {
                  this.handleChangeColor("black");
                }}
              >
                Black
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
