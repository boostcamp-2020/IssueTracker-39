import React from 'react';
import styled, {keyframes} from 'styled-components';
import DropDownPresenter from '../header-filter-dropdown/DropDownPresenter';

const HeaderButton = styled.div`
  font-size: 16px;
  color: #858585;
  cursor: pointer;
  margin-right: 30px;
`;

const dropDownAnimation = keyframes`
0%{
  transform:scaleY(0);
}
100%{
  transform:scaleY(1);
}
`;

const DropDownWrapper = styled.div`
  width: 150px;
  position: absolute;
  right: 0%;
  animation: ${dropDownAnimation} 0.2s;
  transform-origin: top;
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
