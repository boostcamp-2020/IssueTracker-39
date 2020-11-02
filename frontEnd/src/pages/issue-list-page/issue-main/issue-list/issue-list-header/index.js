import React from 'react';
import styled from 'styled-components';
import ChecBoxWithDescription from '~/*/components/checkbox-with-description';
import IssueHeaderFilterButton from '~/*/components/issue-header-filter-button';

const IssueListHeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f6f8fa;
  padding: 20px 10px;
`;

const HeaderLeft = styled.div``;
const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

const issueListDummyList = ['Author', 'Label', 'Milestones', 'Assginee'];

const IssueListHeader = () => {
  return (
    <IssueListHeaderLayout>
      <HeaderLeft>
        <ChecBoxWithDescription></ChecBoxWithDescription>
      </HeaderLeft>
      <HeaderRight>
        <IssueHeaderFilterButton name={'Author'} />
        <IssueHeaderFilterButton name={'Label'} />
        <IssueHeaderFilterButton name={'Milestones'} />
        <IssueHeaderFilterButton name={'Assginee'} />
      </HeaderRight>
    </IssueListHeaderLayout>
  );
};

export default IssueListHeader;
