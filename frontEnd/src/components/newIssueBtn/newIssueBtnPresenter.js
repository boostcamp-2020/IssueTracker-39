import React from 'react';
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
`;

const NewIssueBtnPresenter = ({newIssueClick}) => {
  return (
    <>
      <ButtonWrapper onClick={newIssueClick}>New Issue</ButtonWrapper>
    </>
  );
};

export default NewIssueBtnPresenter;
