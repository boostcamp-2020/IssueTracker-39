import React from 'react';
import styled from 'styled-components';

const textColor = 'gray';
const FooterStyle = styled.div`
  box-sizing: border-box;
  font-size: 15px;
  margin: 0 5%;
  border-top: 1px solid lightgray;
  padding-top: 25px;
  color: ${textColor};
  a {
    margin-left: 5px;
    color: ${textColor};
    &:visited {
      color: ${textColor};
    }
    &:hover {
      color: blue;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
  }
  li {
    margin-top: 10px;
    margin-right: 35px;
  }
`;

const CopyRight = styled.div`
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <CopyRight>&copy;2020 BoostCamp, Group 39, All rights reserved</CopyRight>
      <ul>
        <li>
          J045-<a href="https://github.com/lacomaco">@lacomaco</a>
        </li>
        <li>
          J068-<a href="https://github.com/mon823">@mon823</a>
        </li>
        <li>
          J151-<a href="https://github.com/yyjjjj">@yyjjjj</a>
        </li>
        <li>
          J168-<a href="https://github.com/EarlyHail">@EarlyHail</a>
        </li>
      </ul>
    </FooterStyle>
  );
};

export default Footer;
