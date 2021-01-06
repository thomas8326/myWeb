import ReduxAction from 'src/models/action';
import UserInfo from 'src/models/user-info';

export const LOGIN_USER = 'LOGIN_USER';

const initState: UserInfo = {
  userId: '',
  userName: '',
};

export function login(user: UserInfo) {
  return {
    type: LOGIN_USER,
    user,
  };
}

const loginReducer = (state = initState, action: ReduxAction<UserInfo>): UserInfo => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
