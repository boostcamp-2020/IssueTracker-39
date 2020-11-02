import React from 'react';
import styled from 'styled-components';

import GithubLoginBtn from '~/*/components/github-btn/GithubBtn';

const LoginBackground = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: rgb(249, 249, 249);
  flex-direction: column;
  font-size: 40px;
  align-items: center;
  padding-top: 150px;
`;

const LoginInputBox = styled.div`
  padding: 40px;
  margin-top: 50px;
  margin-bottom: auto;
  border-radius: 10px;
  background-color: white;
`;

const Login = () => {
  return (
    <LoginBackground>
      <h2>이슈 트래커</h2>
      <LoginInputBox>
        <GithubLoginBtn />
      </LoginInputBox>
    </LoginBackground>
  );
};
export default Login;
