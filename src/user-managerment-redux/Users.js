import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

class Users extends Component {
  renderHTML = () => {
    let { userList, keyword } = this.props;

    userList = userList.filter(item => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return userList.map((item, index) => {
      return <UserItem key={index} user={item} />;
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderHTML()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.userReducer.userList,
    keyword: state.userReducer.keyword
  };
};

export default connect(
  mapStateToProps,
  null
)(Users);
