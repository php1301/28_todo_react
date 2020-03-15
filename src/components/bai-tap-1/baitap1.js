import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Content from "./content";
import Footer from "./footer";

function Baitap1() {
  return (
    <div>
      <Header />
      <div className="contents">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Baitap1;
