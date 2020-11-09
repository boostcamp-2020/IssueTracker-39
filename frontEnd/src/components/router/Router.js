import React, {useEffect, useState} from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';

import IssueListPage from '../../pages/issue-list-page/IssueListPage';
import Login from '../../pages/login';
import NewIssuePage from '../../pages/create-issue-page/NewIssuePage';

import LabelModelConsumer from '~/*/models/LabelModel';
import AssigneesModelConsumer from '~/*/models/AssigneesModel';
import MilestoneModelConsumer from '~/*/models/MilestoneModel';
import AuthorModelConsumer from '~/*/models/AuthorModel';

const IssueTrackerRouter = () => {
  const token = localStorage.getItem('token');
  const history = useHistory();
  if (!!!token) {
    history.replace(`/login`);
  }
  return (
    <Switch>
      <Route path="/login" exact={true} component={Login} />
      <MilestoneModelConsumer>
        <LabelModelConsumer>
          <AssigneesModelConsumer>
            <AuthorModelConsumer>
              <Route path="/new-issue" exact={true} component={NewIssuePage} />
              <Route path="/" exact={true} component={IssueListPage} />
            </AuthorModelConsumer>
          </AssigneesModelConsumer>
        </LabelModelConsumer>
      </MilestoneModelConsumer>
    </Switch>
  );
};
export default IssueTrackerRouter;
