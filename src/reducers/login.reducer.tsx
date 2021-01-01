import ReduxStorage from '@Model/storage';
import UserInfo from '@Model/user-info';

export const LOGIN_USER = 'LOGIN_USER';

export function login(user: UserInfo) {
  return {
    type: LOGIN_USER,
    user,
  };
}

const loginReducer = (state: ReduxStorage, action: { type: string; user: UserInfo }): ReduxStorage => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        userInfo: action.user,
      };
    default:
      return state;
  }
};

export default loginReducer;
