import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.sanPham.hinhAnh}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.sanPham.tenSP}</h4>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.chiTietSanPham(this.props.sanPham);
              }}
            >
              Chi tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.themGioHang(this.props.sanPham);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
