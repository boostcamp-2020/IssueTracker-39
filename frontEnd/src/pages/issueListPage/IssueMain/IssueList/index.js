import React, {useContext} from 'react';
import styled from 'styled-components';
import IssueListHeader from './IssueListHeader';
import Issue from '../../../../components/Issue/Issue';

import {IssueListModelContext} from '~/*/models/issueListModel';

const IssueNavigationLayout = styled.nav`
  background-color: #f7f8fa;
  padding: 20px 30px;
`;

const IssueListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IssueNavigationList = () => {
  const {store, actions} = useContext(IssueListModelContext);
  return (
    <IssueNavigationLayout>
      <IssueListHeader></IssueListHeader>
      <IssueListWrapper>
        {store.map((data) => (
          <Issue {...data} key={data.idx} />
        ))}
      </IssueListWrapper>
    </IssueNavigationLayout>
  );
};

export default IssueNavigationList;
