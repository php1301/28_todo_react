import * as ActionType from "./../constants/ActionType";

export const actOnDelete = id => {
  return {
    type: ActionType.DELETE_USER,
    id
  };
};

export const actOnEdit = user => {
  return {
    type: ActionType.EDIT_USER,
    user
  };
};

export const actSaveUser = user => {
  return {
    type: ActionType.SAVE_USER,
    user
  };
};

export const actFilter = keyword => {
  return {
    type: ActionType.FILTER,
    keyword
  };
};
