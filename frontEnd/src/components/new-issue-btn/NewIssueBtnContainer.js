import React from 'react';
import {useHistory} from 'react-router-dom';
import NewIssueBtnPresenter from './NewIssueBtnPresenter';
const NewIssueBtnContainer = () => {
  const history = useHistory();
  return <NewIssueBtnPresenter newIssueClick={() => {}} />;
};

export default NewIssueBtnContainer;
