import React from 'react';
import styled from 'styled-components';

import RepoIcon from '../../images/repository';

const githubBarHeight = '65px';
const repoHeight = '1.5rem';
const repoWidth = '1.5rem';

const HeaderStyle = styled.div`
  box-sizing: border-box;
  background-color: #242a2e;
  font-size: 1.5rem;
  height: ${githubBarHeight};
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  #icon__repo {
    height: ${repoHeight};
    width: ${repoWidth};
    filter: invert(100%);
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <RepoIcon />
      <span>ISSUES</span>
    </HeaderStyle>
  );
};

export default Header;
