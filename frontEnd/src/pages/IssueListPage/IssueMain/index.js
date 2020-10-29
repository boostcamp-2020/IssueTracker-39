import React from 'react';

import IssueList from './IssueList';
import styled from 'styled-components';
import IssueMainHeader from './IssueMainHeader';
// 이곳에 ContextAPI 나중에 추가할것!

const issueMainWidth = '1280px';
const IssueMainWrapper = styled.main`
  width: ${issueMainWidth};
  margin: 60px auto;
`;

const IssueMain = () => {
  return (
    <IssueMainWrapper>
      <IssueMainHeader></IssueMainHeader>
      <IssueList></IssueList>
    </IssueMainWrapper>
  );
};

export default IssueMain;
