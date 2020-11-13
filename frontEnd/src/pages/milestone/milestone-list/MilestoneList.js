import React, {useContext} from 'react';
import styled from 'styled-components';
import MileStoneOpenCounter from '~/*/components/milestone-open-counter/MilestoneOpenCounter';
import MileStoneCloseCoutner from '~/*/components/milestone-close-coutner/MilestoneCloseCounter';
import MilestoneItem from '../milestone-item/MilestoneItem';
import {MilestoneModelContext} from '~/*/models/MilestoneModel';
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
const ListMain = styled.div``;

const ListHeaderItem = styled.div`
  margin-right: 15px;
`;

function getOpenClose(store) {
  const openCounter = store.reduce((acc, curr) => {
    if (curr.opened) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return {
    openCounter,
    closeCounter: store.length - openCounter,
  };
}

const MileStoneList = () => {
  const {store, requests} = useContext(MilestoneModelContext);
  const {openCounter, closeCounter} = getOpenClose(store);
  return (
    <ListWrapper>
      <ListHeader>
        <ListHeaderItem>
          <MileStoneOpenCounter counter={openCounter} />
        </ListHeaderItem>
        <ListHeaderItem>
          <MileStoneCloseCoutner counter={closeCounter} />
        </ListHeaderItem>
      </ListHeader>
      <ListMain>
        {store.map((data) => {
          return (
            <MilestoneItem
              milestone={data}
              requests={requests}
              key={data.idx}
            />
          );
        })}
      </ListMain>
    </ListWrapper>
  );
};

export default MileStoneList;
