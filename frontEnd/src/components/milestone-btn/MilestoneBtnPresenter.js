import React from 'react';
import styled from 'styled-components';
import IconMilestone from '~/*/images/milestone';
import {Link} from 'react-router-dom';

const MilestoneWrapper = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid #efefef;
  padding: 8px 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  border-radius: 0px 3px 3px 0px;
  #icon__milestone {
    margin-right: 10px;
  }
  background-color: ${(props) => (props.select ? '#1066D6' : 'white')};
`;

const CountBack = styled.div`
  border: 1px solid rgb(232, 234, 236);
  background-color: rgb(232, 234, 236);
  border-radius: 50px;
  padding: 0px 5px;
  margin: 0px 8px;
  font-size: 14px;
`;

const MileStoneLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.select ? 'white' : 'black')};
`;

const MilestoneBtnPresenter = ({milestoneClick, count, select}) => {
  return (
    <MilestoneWrapper onClick={milestoneClick} select={select}>
      <IconMilestone color={select ? 'white' : 'black'} />
      <MileStoneLink to="/milestone" select={select ? 1 : 0}>
        Milestones
      </MileStoneLink>
      {count ? <CountBack>{count}</CountBack> : null}
    </MilestoneWrapper>
  );
};

export default MilestoneBtnPresenter;
