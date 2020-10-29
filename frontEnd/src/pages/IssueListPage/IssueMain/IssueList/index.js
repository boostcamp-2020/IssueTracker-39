import React from 'react';
import styled from 'styled-components';
import IssueListHeader from './IssueListHeader';

const IssueNavigationLayout = styled.nav`
  width: 100%;
  background-color: #f7f8fa;
  padding: 20px 30px;
`;

const IssueNavigationList = () => {
  return (
    <IssueNavigationLayout>
      <IssueListHeader></IssueListHeader>
    </IssueNavigationLayout>
  );
};

export default IssueNavigationList;
