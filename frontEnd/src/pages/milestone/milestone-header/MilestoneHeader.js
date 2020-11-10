import React from 'react';
import styled from 'styled-components';
import NavigationList from '~/*/components/navigation-list/NavigationList';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PositionRight = styled.div`
  margin-left: auto;
`;
const MileStoneHeader = () => {
  return (
    <HeaderWrapper>
      <NavigationList />
      <PositionRight>
        오른쪽에 위치한 Create New MileStone 버튼입니다
      </PositionRight>
    </HeaderWrapper>
  );
};

export default MileStoneHeader;
