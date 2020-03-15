import * as ActionType from "./../constants/ActionType";

let initState = {
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

const userReducer = (state = initState, action) => {
  /*
        Neu action them
            => nhiem vu do
        Neu action xoa
            => nhiem vu do
        Neu action sua
            => nhiem vu do
    */
  switch (action.type) {
    case ActionType.DELETE_USER:
      let userList = [...state.userList];

      let index = userList.findIndex(item => {
        return item.id === action.id;
      });

      userList.splice(index, 1);

      state.userList = userList;

      return { ...state };
    case ActionType.SAVE_USER:
      if (action.user.id) {
        //UPDATE
        let userList = [...state.userList];
        let index = userList.findIndex(item => {
          return item.id === action.user.id;
        });

        if (index !== -1) {
          userList[index] = action.user;
          state.userList = userList;
        }
      } else {
        //ADD
        let user = { ...action.user };
        user.id = Math.random();
        state.userList = [...state.userList, user];
      }
      return { ...state };

    case ActionType.EDIT_USER:
      state.userEdit = action.user;
      return { ...state };

    case ActionType.FILTER:
      state.keyword = action.keyword;

      return { ...state };

    default:
      return { ...state };
  }
};

export default userReducer;
