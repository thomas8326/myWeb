import ReduxAction from 'src/models/action';
import ReduxStorage from 'src/models/storage';
import UserInfo from 'src/models/user-info';

export const LOGIN_USER = 'LOGIN_USER';

export function login(user: UserInfo) {
  return {
    type: LOGIN_USER,
    user,
  };
}

const loginReducer = (state: ReduxStorage = new ReduxStorage(), action: ReduxAction<UserInfo>): ReduxStorage => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
