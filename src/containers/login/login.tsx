import React from 'react';

function Login() {
  return (
    <div className="full-layout flex-col flex-center">
      <div className="flex-col flex-center login">
        <input type="text" className="input-box input-l" placeholder="Username" />
        <input type="text" className="input-box input-l" placeholder="Password" />
        <input type="submit" className="input-s" value="submit" />
      </div>
    </div>
  );
}

export default Login;
