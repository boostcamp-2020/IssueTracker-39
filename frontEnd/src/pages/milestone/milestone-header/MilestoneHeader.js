import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import NavigationList from '~/*/components/navigation-list/NavigationList';
import CommonButton from '~/*/components/common-button/CommonButton';

const shallowGreenColor = 'rgb(46, 164, 79)';
const textColor = 'white';

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
        <Link to="/milestone/new">
          <CommonButton color={shallowGreenColor} textColor={textColor}>
            New milestone
          </CommonButton>
        </Link>
      </PositionRight>
    </HeaderWrapper>
  );
};

export default MileStoneHeader;
