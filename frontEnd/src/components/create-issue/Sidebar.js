import React, {useContext} from 'react';
import styled from 'styled-components';

import IssueHeaderFilterButton from '~/*/components/issue-header-filter-button';
import FilterModelConsumer from '~/*/models/FilterModel';
import IssueListModelConsumer from '~/*/models/IssueListModel';

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

const SidebarItemName = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarItemDesc = styled.span`
  box-sizing: border-box;
  color: #586069;
  font-size: 13px;
  padding-bottom: 16px;
`;

const SidebarItem = ({name, desc}) => {
  return (
    <SidebarItemLayout>
      <SidebarItemName>
        {name === 'Assignee' && 'Assignees'}
        {name === 'Label' && 'Labels'}
        {name === 'Milestone' && 'Milestone'}
        <IssueHeaderFilterButton name={name} isSidebar={true} />
      </SidebarItemName>
      <SidebarItemDesc>{desc}</SidebarItemDesc>
    </SidebarItemLayout>
  );
};

const Sidebar = () => {
  return (
    <IssueListModelConsumer>
      <FilterModelConsumer>
        <SidebarWrapper>
          <SidebarItem name={'Assignee'} desc="No one-assign yourself" />
          <SidebarItem name={'Label'} desc="None yet" />
          <SidebarItem name={'Milestone'} desc="No milestone" />
        </SidebarWrapper>
      </FilterModelConsumer>
    </IssueListModelConsumer>
  );
};

export default Sidebar;
