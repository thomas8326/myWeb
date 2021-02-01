// imt Action from '@Model/action';
// import UserInfo from '@Model/user-info';
// import { LOGIN_USER } from '@Reducer/login.reducer';
import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ApiPath from 'src/constants/api.enum';
import ResponseContent from 'src/models/response-content';
import UserInfo from 'src/models/user-info';
import { login } from 'src/reducers/login.reducer';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setUserPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = () => {
    const userInfo = new UserInfo(userName);

    axios.post<ResponseContent<UserInfo>>(ApiPath.Login, userInfo).then((response) => {
      dispatch(login(response.data.data));
    });

    history.push('/show-room');
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
        <input type="submit" className="input-s" value="submit" onClick={() => onLogin()} />
      </div>
    </div>
  );
}

export default Login;
