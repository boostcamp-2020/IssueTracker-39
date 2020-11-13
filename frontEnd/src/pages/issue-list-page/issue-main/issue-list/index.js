import React, {useContext, useEffect, useMemo} from 'react';
import styled from 'styled-components';
import IssueListHeader from './issue-list-header';
import Issue from '~/*/components/issue/Issue';

import {IssueListModelContext} from '~/*/models/IssueListModel';
import NoMatchComponent from '../no-match-component/NoMatchComponent';
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
  const {store} = useContext(IssueListModelContext);
  const renderedResult = useMemo(() => {
    if (store.length === 0) {
      return <NoMatchComponent />;
    }
    return store.map((data) => <Issue {...data} key={data.idx} />);
  }, [store]);
  return (
    <IssueNavigationLayout>
      <IssueListHeader></IssueListHeader>
      <IssueListWrapper>{renderedResult}</IssueListWrapper>
    </IssueNavigationLayout>
  );
};

export default IssueNavigationList;
