import React, {useContext} from 'react';
import styled from 'styled-components';
import IssueListHeader from './issue-list-header';
import Issue from '~/*/components/issue/Issue';

import {IssueListModelContext} from '~/*/models/IssueListModel';

const IssueNavigationLayout = styled.nav`
  background-color: #ffffff;
  border: 1px solid lightgray;
  border-radius: 2px;
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
