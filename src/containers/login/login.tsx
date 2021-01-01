import Action from '@Model/action';
import UserInfo from '@Model/user-info';
import { LOGIN_USER } from '@Reducer/login.reducer';
import React from 'react';
import { useDispatch } from 'react-redux';

function Login() {
  const login = (userName: string) => {
    useDispatch()({
      type: LOGIN_USER,
      payload: {
        userName,
      },
    } as Action<UserInfo>);
  };

  return (
    <div className="full-layout flex-col flex-center">
      <div className="flex-col flex-center login">
        <input type="text" className="input-box input-l" placeholder="Username" />
        <input type="text" className="input-box input-l" placeholder="Password" />
        <input type="submit" className="input-s" value="submit" onClick={() => login()} />
      </div>
    </div>
  );
}

export default Login;
