import React from 'react';
import styled from 'styled-components';
import IconSetting from '../../images/setting';

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const SidebarItemLayout = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 16px;
  color: #586069;
  line-height: 1.5;
`;

const SidebarItemTitle = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnSetting = styled.span`
  #icon__setting {
    width: 14px;
    height: 14px;
    vertical-align: middle;
    cursor: pointer;
  }
`;

const SidebarItemDesc = styled.span`
  box-sizing: border-box;
  color: #586069;
  font-size: 13px;
  padding-bottom: 16px;
`;

const SidebarItem = ({title, desc}) => {
  return (
    <SidebarItemLayout>
      <SidebarItemTitle>
        {title}
        <BtnSetting>
          <IconSetting />
        </BtnSetting>
      </SidebarItemTitle>
      <SidebarItemDesc>{desc}</SidebarItemDesc>
    </SidebarItemLayout>
  );
};

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarItem title="Assignees" desc="No one-assign yourself" />
      <SidebarItem title="Labels" desc="None yet" />
      <SidebarItem title="Milestone" desc="No milestone" />
    </SidebarWrapper>
  );
};

export default Sidebar;
