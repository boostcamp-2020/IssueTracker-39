import React, {useContext} from 'react';
import styled from 'styled-components';

import IssueHeaderFilterButton from '~/*/components/issue-header-filter-button';
import {SidebarModelContext} from '../../models/SidebarModel';
import Label from '~/*/components/label/Label';
import ProgressBar from '~/*/components/progress-bar/ProgressBar';

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

const RevisedName = (name) => {
  switch (name) {
    case 'Assignee':
      return 'Assignees';
    case 'Label':
      return 'Labels';
    default:
      return name;
  }
};

const AssigneeItem = ({data}) => {
  return <div>{data.title}</div>;
};

const LabelLayout = styled.div`
  margin-top: 5px;
`;

const LabelItem = ({data}) => {
  const {title, color} = data;
  return (
    <LabelLayout>
      <Label title={title} color={color}>
        {title}
      </Label>
    </LabelLayout>
  );
};

const MilestoneProgressItem = ({milestone}) => {
  return (
    <>
      <ProgressBar
        open={milestone.openedIssues}
        close={milestone.closedIssues}
        opened={milestone.opened}
      />
      <p>{milestone.title}</p>
    </>
  );
};

const SidebarItem = ({name, detailLabelOnClick}) => {
  const {milestone, labels, assignees} = useContext(SidebarModelContext);
  let desc = null;
  if (name === 'Label') {
    if (!Object.keys(labels).length) desc = 'None yet';
    else {
      desc = [...Object.keys(labels)].map((idx) => (
        <LabelItem key={idx} data={labels[idx]} />
      ));
    }
  }
  if (name === 'Assignee') {
    if (!Object.keys(assignees).length) desc = 'No one-assign yourself';
    else {
      desc = [...Object.keys(assignees)].map((idx) => (
        <AssigneeItem key={idx} data={assignees[idx]} />
      ));
    }
  }
  if (name === 'Milestone') {
    if (!Object.keys(milestone).length) desc = 'No milestone';
    else
      desc = [...Object.keys(milestone)].map((idx) => (
        <MilestoneProgressItem milestone={milestone[idx]} key={idx} />
      ));
  }

  return (
    <SidebarItemLayout>
      <SidebarItemName>
        {RevisedName(name)}
        <IssueHeaderFilterButton
          name={name}
          isSidebar={true}
          detailLabelOnClick={detailLabelOnClick}
        />
      </SidebarItemName>
      <SidebarItemDesc>{desc}</SidebarItemDesc>
    </SidebarItemLayout>
  );
};

const Sidebar = ({detailLabelOnClick}) => {
  return (
    <SidebarWrapper>
      <SidebarItem name={'Assignee'} />
      <SidebarItem name={'Label'} detailLabelOnClick={detailLabelOnClick} />
      <SidebarItem name={'Milestone'} />
    </SidebarWrapper>
  );
};

export default Sidebar;
