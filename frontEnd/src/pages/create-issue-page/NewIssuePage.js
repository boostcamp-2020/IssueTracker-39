import React from 'react';
import authorImage from '~/*/images/author.png';
import styled from 'styled-components';

import Header from '~/*/components/header/Header';
import CreateNewIssueForm from './CreateNewIssueForm';
import Sidebar from '~/*/components/create-issue/Sidebar';
import FilterModelConsumer from '~/*/models/FilterModel';
import IssueListModelConsumer from '~/*/models/IssueListModel';
import SidebarModelConsumer from '~/*/models/SidebarModel';

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const NewIssuePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 10px;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
`;

// 상태를 여기서 넘겨주기

const NewIssuePage = () => {
  return (
    <>
      <Header />
      <IssueListModelConsumer>
        <FilterModelConsumer>
          <SidebarModelConsumer>
            <NewIssuePageWrapper>
              <AuthorImage src={authorImage} />
              <CreateNewIssueForm />
              <Sidebar />
            </NewIssuePageWrapper>
          </SidebarModelConsumer>
        </FilterModelConsumer>
      </IssueListModelConsumer>
    </>
  );
};

export default NewIssuePage;
