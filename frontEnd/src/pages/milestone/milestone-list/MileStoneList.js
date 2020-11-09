import React from 'react';
import styled from 'styled-components';
import MileStoneOpenCounter from '~/*/components/milestone-open-counter/MileStoneOpenCounter';
import MileStoneCloseCoutner from '~/*/components/milestone-close-coutner/MileStoneCloseCounter';
import MilestoneItem from '../milestone-item/MilestoneItem';
const ListWrapper = styled.div`
  border: 1px solid lightgray;
`;
const ListHeader = styled.div`
  padding: 20px 20px;
  background-color: #f6f8fa;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ListMain = styled.div`
`;

const ListHeaderItem = styled.div`
  margin-right: 15px;
`;

const dummyMile = [
  {
    idx: 1,
    title: 'milestone1',
    description: 'description1',
    dueDate: '2020-10-05T09:52:39.000Z',
    openedIssues: 4,
    closedIssues: 1,
  },
  {
    idx: 2,
    title: 'milestone2',
    description: 'description2',
    dueDate: '2020-10-27T09:52:39.000Z',
    openedIssues: 2,
    closedIssues: 0,
  },
];

const MileStoneList = () => {
  return (
    <ListWrapper>
      <ListHeader>
        <ListHeaderItem>
          <MileStoneOpenCounter />
        </ListHeaderItem>
        <ListHeaderItem>
          <MileStoneCloseCoutner />
        </ListHeaderItem>
      </ListHeader>
      <ListMain>
      {dummyMile.map(data=>{
        return <MilestoneItem milestone={data} key={data.idx}/>
      })}
      </ListMain>
    </ListWrapper>
  );
};

export default MileStoneList;
