import React from 'react';
import styled from 'styled-components';
import DropDownPresenter from '../header-filter-dropdown/DropDownPresenter';

const HeaderButton = styled.div`
  font-size: 16px;
  color: #858585;
  cursor: pointer;
  margin-right: 30px;
`;

const DropDownWrapper = styled.div`
  width: 150px;
  position: absolute;
  right: 0%;
`;

const HeaderWrapper = styled.div`
  position: relative;
`;
const IssueHeaderButtonPresenter = ({name, showModal, show}) => {
  console.log(show);
  return (
    <HeaderWrapper>
      <HeaderButton onClick={showModal}>{name}</HeaderButton>
      {show ? (
        <DropDownWrapper>
          <DropDownPresenter dropDownName={'드랍다운 헤더'} />
        </DropDownWrapper>
      ) : undefined}
    </HeaderWrapper>
  );
};

export default IssueHeaderButtonPresenter;
