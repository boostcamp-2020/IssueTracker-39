import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid rgb(46, 164, 79);
  border-radius: 3px;
  background-color: rgb(46, 164, 79);
  color: white;
  margin-left: 10px;
  padding: 8px 14px;
  text-decoration: none;
`;

const NewLink = styled(Link)`
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
`;

const NewIssueBtnPresenter = ({newIssueClick}) => {
  return (
    <>
      <NewLink to="/new-issue">
        <ButtonWrapper onClick={newIssueClick}>New Issue</ButtonWrapper>
      </NewLink>
    </>
  );
};

export default NewIssueBtnPresenter;
