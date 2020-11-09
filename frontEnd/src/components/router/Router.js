import React, {useEffect, useState} from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';

import IssueListPage from '~/*/pages/issue-list-page/IssueListPage';
import Login from '~/*/pages/login';
import MileStonePage from '~/*/pages/milestone/MileStonePage';

import LabelModelConsumer from '~/*/models/LabelModel';
import AssigneesModelConsumer from '~/*/models/AssigneesModel';
import MilestoneModelConsumer from '~/*/models/MilestoneModel';
import AuthorModelConsumer from '~/*/models/AuthorModel';

import LabelPage from '~/*/pages/label-page';

const IssueTrackerRouter = () => {
  const token = localStorage.getItem('token');
  const history = useHistory();
  if (!!!token) {
    history.replace(`/login`);
  }
  return (
    <Switch>
      <Route path="/login" exact={true} component={Login} />
      <Route path="/milestone" exact={true} component={MileStonePage} />
      <MilestoneModelConsumer>
        <LabelModelConsumer>
          <AssigneesModelConsumer>
            <AuthorModelConsumer>
              <Route path="/" exact={true} component={IssueListPage} />
              <Route path="/label" exact={true} component={LabelPage} />
            </AuthorModelConsumer>
          </AssigneesModelConsumer>
        </LabelModelConsumer>
      </MilestoneModelConsumer>
    </Switch>
  );
};
export default IssueTrackerRouter;
