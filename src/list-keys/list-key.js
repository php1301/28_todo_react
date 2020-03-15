import React, { Component } from "react";

export default class ListKeys extends Component {
  mangSP = [
    { maSP: 1, tenSP: "Iphone", gia: 100 },
    { maSP: 2, tenSP: "Samsung", gia: 200 },
    { maSP: 3, tenSP: "HTC", gia: 300 }
  ];

  renderTable = () => {
    return this.mangSP.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>{item.gia}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3>*ListKeys</h3>
        <table className="table">
          <thead>
            <tr>
              <th>MaSP</th>
              <th>TenSP</th>
              <th>giaSP</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
