import React from 'react';
import styled from 'styled-components';
import LabelBtn from '~/*/components/label-btn';
import MilestoneBtn from '~/*/components/milestone-btn';
import NewIssueBtn from '~/*/components/new-issue-btn';

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
