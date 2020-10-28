import React from 'react';
import styled from 'styled-components';

import githubLogo from '../../images/github_logo.png';

const githubBtnHeight = '25px';

const GithubBtnStyle = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: solid 1px lightgray;
  background-color: gray;
  font-size: 16px;
  padding: 10px 30px;
  height: ${githubBtnHeight};
`;

const GithubBtnAtag = styled.a`
  align-self: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin-right: 10px;
  $:visited,
  $:active {
    color: white;
  }
`;

const GithubImage = styled.img`
  height: ${githubBtnHeight};
`;

const GithubLoginBtn = () => {
  return (
    <GithubBtnStyle>
      <GithubBtnAtag href="/api/auth/github">Sign in with Github</GithubBtnAtag>
      <GithubImage src={githubLogo}></GithubImage>
    </GithubBtnStyle>
  );
};
export default GithubLoginBtn;
