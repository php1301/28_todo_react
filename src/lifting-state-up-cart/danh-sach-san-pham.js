import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderHTML = () => {
    return this.props.danhSachSanPham.map((item, index) => {
      return (
        <SanPham
          key={index}
          sanPham={item}
          chiTietSanPham={this.props.chiTietSanPham}
          themGioHang={this.props.themGioHang}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}
