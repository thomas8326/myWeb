import ReduxAction from 'src/models/action';
import UserInfo from 'src/models/user-info';

export const LOGIN_USER = 'LOGIN_USER';

const initState: UserInfo = {
  id: '',
  name: '',
};

export function login(user: UserInfo): ReduxAction<UserInfo> {
  return {
    type: LOGIN_USER,
    payload: [],
    object: user,
  };
}

const loginReducer = (state = initState, action: ReduxAction<UserInfo>): UserInfo => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        ...action.object,
      };
    default:
      return state;
  }
};

export default loginReducer;
