// import Action from '@Model/action';
// import UserInfo from '@Model/user-info';
// import { LOGIN_USER } from '@Reducer/login.reducer';
import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import ReduxAction from 'src/models/action';
import UserInfo from 'src/models/user-info';
import { LOGIN_USER } from 'src/reducers/login.reducer';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setUserPassword] = useState('');
  const dispatch = useDispatch();

  const login = () => {
    console.log(userName);
    console.log(password);
    dispatch({
      type: LOGIN_USER,
      payload: {
        userName,
      },
    } as ReduxAction<UserInfo>);
  };

  return (
    <div className="full-layout flex-col flex-center">
      <div className="flex-col flex-center login">
        <input
          type="text"
          className="input-box input-l"
          placeholder="Username"
          value={userName}
          onInput={(event: FormEvent<HTMLInputElement>) => setUserName(event.currentTarget.value)}
        />
        <input
          type="text"
          className="input-box input-l"
          placeholder="Password"
          value={password}
          onInput={(event: FormEvent<HTMLInputElement>) => setUserPassword(event.currentTarget.value)}
        />
        <input type="submit" className="input-s" value="submit" onClick={() => login()} />
      </div>
    </div>
  );
}

export default Login;
