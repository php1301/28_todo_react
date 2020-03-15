import React, { Component } from "react";
import Header from "./header";
import Carousel from "./carousel";
import WhatWeDo from "./what-we-do";
import Contact from "./contact";
import ListCard from "./list-card";
import Footer from "./footer";

export default class Baitap2 extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <div className="container">
          <div className="row">
            <WhatWeDo />
            <Contact />
          </div>
          <ListCard />
        </div>
        <Footer />
      </div>
    );
  }
}
