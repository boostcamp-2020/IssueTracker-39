import React, {useState} from 'react';
import styled from 'styled-components';

import './App.css';
import {HashRouter} from 'react-router-dom';
import Router from '../Router/Router';

/**
 * 1. 로컬스토리지 확인
 *    1.1 토큰이 있을 시 token 리턴
 * 2. 쿠키 확인
 *    2.1 쿠키에 있을 시 로컬 스토리지에 저장 후 cookie 삭제 token 리턴
 * 3. 리턴 토큰 없을 시 로그인 페이지 렌더링
 * 4. 리턴 토큰 있을 시 리스트 렌더링
 */

const checkTokenInLocalStorage = () => {
  const token = localStorage.getItem('token');
  return token ? token : undefined;
};

const checkTokenInCookies = () => {
  try {
    const token = document.cookie
      .split(';')
      .find((cookie) => cookie.includes('token='))
      .split('=')[1];
    deleteCookie('token');
    localStorage.token = token;
  } catch (e) {
    return undefined;
  }
};

const isTokenExists = () => {
  const token = checkTokenInLocalStorage();
  if (!!!token) checkTokenInCookies();
  return checkTokenInLocalStorage();
};

const deleteCookie = function (name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};

const AppStyle = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  const token = isTokenExists();
  return (
    <AppStyle>
      <HashRouter>
        <Router token={token} />
      </HashRouter>
    </AppStyle>
  );
};

export default App;
