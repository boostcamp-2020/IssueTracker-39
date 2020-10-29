import React from 'react';
import styled from 'styled-components';
import LabelBtn from '~/*/components/labelBtn';
import MilestoneBtn from '~/*/components/milestoneBtn';
import NewIssueBtn from '~/*/components/newIssueBtn';

const ButtonListLayout = styled.div`
  margin: 10px 10px;
  display: flex;
  flex-direction: row;
`;

const ButtonList = () => {
  return (
    <ButtonListLayout>
      <LabelBtn></LabelBtn>
      <MilestoneBtn></MilestoneBtn>
      <NewIssueBtn></NewIssueBtn>
    </ButtonListLayout>
  );
};

export default ButtonList;
