import React from 'react';
import styled from 'styled-components';
import MileStoneOpenCounter from '~/*/components/milestone-open-counter/MileStoneOpenCounter';
import MileStoneCloseCoutner from '~/*/components/milestone-close-coutner/MileStoneCloseCounter';
const ListWrapper = styled.div`
  border: 1px solid lightgray;
`;
const ListHeader = styled.div`
  padding: 20px 10px;
  background-color: #f6f8fa;
`;
const ListMain = styled.div`
  padding: 20px 10px;
`;

const MileStoneList = () => {
  return (
    <ListWrapper>
      <ListHeader>
        <MileStoneOpenCounter />
        <MileStoneCloseCoutner />
      </ListHeader>
      <ListMain></ListMain>
    </ListWrapper>
  );
};

export default MileStoneList;
