import React from 'react';
import styled, {keyframes} from 'styled-components';
import DropDownPresenter from '~/*/components/header-filter-dropdown/DropDownPresenter';
import SidebarDropDown from '~/*/components/issue-header-filter-button/SidebarDropDownPresenter';
import IconSetting from '~/*/images/setting';

const BtnSetting = styled.div`
  display: inline-block;
  #icon__setting {
    width: 14px;
    height: 14px;
    vertical-align: middle;
    cursor: pointer;
    display: inline;
    /* @리팩토링 필요 */
    z-index: 0;
  }
`;

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
  width: 100%;
  position: relative;
  animation: ${dropDownAnimation} 0.2s;
  transform-origin: top;
`;

const HeaderWrapper = styled.div`
  position: relative;
`;
const IssueHeaderButtonPresenter = ({
  name,
  showModal,
  show,
  reference,
  onClick,
  isSidebar,
  detailLabelOnClick,
}) => {
  return (
    <HeaderWrapper ref={reference}>
      {isSidebar ? (
        <BtnSetting onClick={onClick}>
          <IconSetting />
        </BtnSetting>
      ) : (
        <HeaderButton onClick={onClick}>{name}</HeaderButton>
      )}
      {show ? (
        isSidebar ? (
          <DropDownWrapper>
            <SidebarDropDown
              dropDownName={name}
              onClick={onClick}
              detailLabelOnClick={detailLabelOnClick}
            />
          </DropDownWrapper>
        ) : (
          <DropDownWrapper>
            <DropDownPresenter dropDownName={name} onClick={onClick} />
          </DropDownWrapper>
        )
      ) : undefined}
    </HeaderWrapper>
  );
};

export default IssueHeaderButtonPresenter;
