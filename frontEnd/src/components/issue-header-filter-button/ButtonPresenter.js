import React from 'react';
import styled from 'styled-components';

const HeaderButton = styled.div`
  font-size: 16px;
  color: #858585;
  cursor: pointer;
  margin-right: 30px;
`;
const IssueHeaderButtonPresenter = ({name, showModal}) => {
  return <HeaderButton onClick={showModal}>{name}</HeaderButton>;
};

export default IssueHeaderButtonPresenter;
