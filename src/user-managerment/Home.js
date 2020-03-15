import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ],
      userEdit: null,
      keyword: ""
    };
  }

  timViTri = id => {
    return this.state.userList.findIndex(item => {
      return item.id === id;
    });
  };

  handleDelete = id => {
    let index = this.timViTri(id);

    let userList = [...this.state.userList];

    if (index !== -1) {
      userList.splice(index, 1);
    }

    this.setState({
      userList
    });
  };

  handleOnSubmit = user => {
    if (user.id) {
      //EDIT

      /*
        1. Tìm vị trí => index
        2. userList[index] = user
        3. setState()
      */

      let userList = [...this.state.userList];
      let index = this.timViTri(user.id);
      if(index !== -1){
        userList[index] = user;
      }

      this.setState({
        userList,
        userEdit: user
      })
    } else {
      //ADD

      user.id = Math.random();

      let userList = [...this.state.userList, user];

      this.setState({
        userList
      });
    }
  };

  handleUserEdit = user => {
    this.setState({
      userEdit: user
    });
  };

  handleOnFilter = (keyword) => {
    this.setState({
      keyword
    })
  }

  render() {
    let { userList, keyword } = this.state;

    userList = userList.filter(item => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    })

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search onFilter={this.handleOnFilter} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({ userEdit: null });
            }}
          >
            Add User
          </button>
        </div>
        <Users
          userList={userList}
          onDelete={this.handleDelete}
          userEdit={this.handleUserEdit}
        />
        <Modal userEdit={this.state.userEdit} onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

export default Home;
