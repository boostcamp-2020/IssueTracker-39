import React from 'react';
import styled from 'styled-components';
import IssueListHeader from './IssueListHeader';
import Issue from '../../../../components/Issue/Issue';

const IssueNavigationLayout = styled.nav`
  background-color: #f7f8fa;
  padding: 20px 30px;
`;

const IssueListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;

const dummyIssue = {
  title: 'This is title',
  labelTitle: 'FE',
  labelColor: 'red',
  createdTime: 'createdTime',
  closedTime: 'closedTime',
  status: 'status',
  author: 'someone',
  milestoneIdx: '1',
};

const IssueNavigationList = () => {
  return (
    <IssueNavigationLayout>
      <IssueListHeader></IssueListHeader>
      <IssueListWrapper>
        <Issue {...dummyIssue} />
        <Issue {...dummyIssue} />
        <Issue {...dummyIssue} />
      </IssueListWrapper>
    </IssueNavigationLayout>
  );
};

export default IssueNavigationList;
