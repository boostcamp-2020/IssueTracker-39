import React from 'react';
import NewIssueBtnPresenter from './NewIssueBtnPresenter';
const NewIssueBtnContainer = () => {
  return (
    <NewIssueBtnPresenter
      newIssueClick={() => {
        console.log('newIssue Click');
      }}
    />
  );
};

export default NewIssueBtnContainer;
