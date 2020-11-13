import React from 'react';
import styled from 'styled-components';
import MilestoneDetail from '~/*/pages/milestone/milestone-detail/MilestoneDetail';
import MilestoneProgress from '~/*/pages/milestone/milestone-progress/MilestoneProgress';
const ItemWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid lightgray;
  margin-bottom: -1px;
  display: flex;
`;
const ItemLeft = styled.div``;
const ItemRight = styled.div`
  margin-left: auto;
  width: 40%;
`;
const MilestoneItem = ({milestone,requests}) => {
  return (
    <ItemWrapper>
      <ItemLeft>
        <MilestoneDetail
          title={milestone.title}
          dueDate={milestone.dueDate}
          description={milestone.description}
        />
      </ItemLeft>
      <ItemRight>
        <MilestoneProgress
          open={milestone.openedIssues}
          close={milestone.closedIssues}
          idx={milestone.idx}
          opened={milestone.opened}
          requests={requests}
        />
      </ItemRight>
    </ItemWrapper>
  );
};

export default MilestoneItem;
