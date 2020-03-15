import React, { Component } from "react";

export default class Formvalidation extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h3>Form Validation</h3>
            <form>
              <div className="form-group">
                <label htmlFor>Username</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor>Password</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor>Email</label>
                <input type="email" className="form-control" />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
