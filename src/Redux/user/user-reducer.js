import { UserActionTypes } from "./user-types"
const INITIAL_STATE = { currentUser: null };

const userReducer = (curState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...curState,
        currentUser: action.payload
      };
    default:
      return curState;
  }
};

export default userReducer;