import React from 'react';
import styled from 'styled-components';
import milestoneSvg from '~/*/images/milestone.svg';

const MilestoneWrapper = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid #efefef;
  border-radius: 3px;
  padding: 8px 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
`;

const MilestoneImage = styled.img`
  margin-right: 10px;
`;

const CountBack = styled.div`
  border: 1px solid rgb(232, 234, 236);
  background-color: rgb(232, 234, 236);
  border-radius: 50px;
  padding: 0px 5px;
  margin: 0px 8px;
  font-size: 14px;
`;

const MilestoneBtnPresenter = ({milestoneClick, count}) => {
  console.log(milestoneClick);
  console.log(count);
  return (
    <MilestoneWrapper>
      <MilestoneImage src={milestoneSvg}></MilestoneImage>
      Milestones
      <CountBack>{count}</CountBack>
    </MilestoneWrapper>
  );
};

export default MilestoneBtnPresenter;
