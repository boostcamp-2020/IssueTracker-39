import React from 'react';
import authorImage from '~/*/images/author.png';

import Header from '~/*/components/header/Header';
import CreateNewIssueForm from './CreateNewIssueForm';
import Sidebar from '~/*/components/create-issue/Sidebar';
import styled from 'styled-components';

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const NewIssuePage = () => {
  const NewIssuePageWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 32px 10px;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
  `;
  console.log('rendered?');

  return (
    <>
      <Header />
      <NewIssuePageWrapper>
        <AuthorImage src={authorImage} />
        <CreateNewIssueForm />
        <Sidebar />
      </NewIssuePageWrapper>
    </>
  );
};

export default NewIssuePage;
