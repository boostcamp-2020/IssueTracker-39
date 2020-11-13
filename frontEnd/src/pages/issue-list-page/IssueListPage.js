import React from 'react';
import styled from 'styled-components';

import Header from '~/*/components/header/Header';
import Footer from '~/*/components/footer/Footer';
import Issue from '~/*/components/issue/Issue';
import IssueMain from './issue-main';

import IssueListModelConsumer from '~/*/models/IssueListModel';
import FilterModelConsumer from '~/*/models/FilterModel';

const IssueListPage = () => {
  let issue = {
    title: 'This is title',
    labelTitle: 'FE',
    labelColor: 'red',
    createdTime: 'createdTime',
    closedTime: 'closedTime',
    status: 'status',
    author: 'someone',
    milestoneIdx: '1',
  };

  return (
    <>
      <IssueListModelConsumer>
        <FilterModelConsumer>
          <Header />
          <IssueMain />
          <Footer />
        </FilterModelConsumer>
      </IssueListModelConsumer>
    </>
  );
};

export default IssueListPage;
