import React from 'react';
import styled from 'styled-components';

const HeaderButton = styled.div`
  font-size: 20px;
  color: #858585;
  cursor: pointer;
  margin-left: 10px;
`;
const IssueHeaderButtonPresenter = ({name, showModal}) => {
  return <HeaderButton onClick={showModal}>{name}</HeaderButton>;
};

export default IssueHeaderButtonPresenter;
