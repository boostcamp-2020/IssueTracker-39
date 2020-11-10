import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  box-sizing: border-box;
  background-color: #242a2e;
  font-size: 15px;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  a {
    text-decoration: none;
    margin-left: 5px;
    &:visited {
      text-decoration: none;
      color: white;
    }
  }
  li {
    margin-top: 10px;
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
          J045 김영근 <a href="https://github.com/lacomaco">@lacomaco</a>
        </li>
        <li>
          J068 문석암 <a href="https://github.com/mon823">@mon823</a>
        </li>
        <li>
          J151 이연정 <a href="https://github.com/yyjjjj">@yyjjjj</a>
        </li>
        <li>
          J168 이호진 <a href="https://github.com/EarlyHail">@EarlyHail</a>
        </li>
      </ul>
    </FooterStyle>
  );
};

export default Footer;
