import React, { Component } from "react";

class Search extends Component {
  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={(event) => {this.props.onFilter(event.target.value)}} />;
  }
}

export default Search;
