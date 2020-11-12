import React, {useContext} from 'react';
import styled, {keyframes} from 'styled-components';
import {SidebarModelContext} from '~/*/models/SidebarModel';
import DropDownItem from './SidebarDropDownItem';
import {modelStore} from '~/*/models/store';

const Wrapper = styled.ul`
  position: absolute;
  bottom: 0%;
  right: 0%;
  width: 300px;
  max-height: 300px;
  overflow-y: scroll;
  transform: translateY(100%);
  box-shadow: 2px 2px 2px lightgray;
  border: 1px solid lightgray;
  background-color: #ffffff;
  /* @리팩토링 필요 */
  z-index: 10;
`;

const DropDownHeader = styled.li`
  background-color: #f7f8fa;
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
`;

//description_title
const SidebarDropDown = ({dropDownName, detailLabelOnClick}) => {
  const {
    labels,
    onUpdateLabels,
    milestone,
    onUpdateMilestone,
    assignees,
    onUpdateAssignees,
  } = useContext(SidebarModelContext);

  const onClick = (parentName, data) => {
    if (parentName === 'Assignee') {
      onUpdateAssignees(data.idx, data);
    } else if (parentName === 'Label') {
      if (detailLabelOnClick) {
        detailLabelOnClick(data.idx);
      }
      onUpdateLabels(data.idx, data);
    } else if (parentName === 'Milestone') {
      onUpdateMilestone(data.idx, data);
    }
  };

  const checkSelected = (parentName, idx) => {
    if (parentName === 'Assignee') {
      return assignees[idx];
    } else if (parentName === 'Label') {
      return labels[idx];
    } else if (parentName === 'Milestone') {
      return milestone[idx];
    }
  };

  const {store, getDropDownItem} = useContext(modelStore[dropDownName]);
  const dropDownItems = getDropDownItem(store);
  return (
    <Wrapper>
      <DropDownHeader>Filter by {dropDownName}</DropDownHeader>
      {dropDownItems.map((item, id) => (
        <DropDownItem
          onClick={onClick}
          title={item.title}
          idx={item.idx}
          key={id}
          description={item.description}
          color={item.color}
          parentName={dropDownName}
          selected={checkSelected(dropDownName, item.idx)}
          openedIssues={item.openedIssues}
          closedIssues={item.closedIssues}
          opened={item.opened}
          // 여기서 선택된거 바꿔줘야해요
        />
      ))}
    </Wrapper>
  );
};

export default SidebarDropDown;
