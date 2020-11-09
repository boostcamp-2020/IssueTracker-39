import React from 'react';
import styled from 'styled-components';
import MileStoneOpenCounter from '~/*/components/milestone-open-counter/MileStoneOpenCounter';
import MileStoneCloseCoutner from '~/*/components/milestone-close-coutner/MileStoneCloseCounter';
const ListWrapper = styled.div`
  border: 1px solid lightgray;
`;
const ListHeader = styled.div`
  padding: 20px 20px;
  background-color: #f6f8fa;
  display:flex;
  flex-direction:row;
  align-items:center;
`;
const ListMain = styled.div`
  padding: 20px 10px;
`;

const ListHeaderItem = styled.div`
  margin-right: 15px;
`;

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
      <ListMain></ListMain>
    </ListWrapper>
  );
};

export default MileStoneList;
