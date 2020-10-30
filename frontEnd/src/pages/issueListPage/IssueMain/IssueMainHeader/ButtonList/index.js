import React from 'react';
import styled from 'styled-components';
import LabelBtn from '~/*/components/labelBtn';
import MilestoneBtn from '~/*/components/milestoneBtn';
import NewIssueBtn from '~/*/components/newIssueBtn';

const ButtonListLayout = styled.div`
  margin: 10px 10px;
  margin-right: 0px;
  display: flex;
  flex-direction: row;
`;

const NewIssueBtnWrapper = styled.div`
  width: 115px;
`;

const ButtonList = () => {
  return (
    <ButtonListLayout>
      <LabelBtn></LabelBtn>
      <MilestoneBtn></MilestoneBtn>
      <NewIssueBtnWrapper>
        <NewIssueBtn></NewIssueBtn>
      </NewIssueBtnWrapper>
    </ButtonListLayout>
  );
};

export default ButtonList;
