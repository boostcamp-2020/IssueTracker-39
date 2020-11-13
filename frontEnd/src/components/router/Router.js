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
import MilestoneNesting from './MilestoneNesting';
import NewIssuePage from '~/*/pages/create-issue-page/NewIssuePage';
import DetailIssuePage from '~/*/pages/detail-issue-page/DetailIssuePage';

import LabelModelConsumer from '~/*/models/LabelModel';
import AssigneesModelConsumer from '~/*/models/AssigneesModel';
import MilestoneModelConsumer from '~/*/models/MilestoneModel';
import AuthorModelConsumer from '~/*/models/AuthorModel';

import LabelPage from '~/*/pages/label-page';
import TextareaModelConsumer from '~/*/models/TextareaModel';

const IssueTrackerRouter = () => {
  const token = localStorage.getItem('token');
  const history = useHistory();
  if (!!!token) {
    history.replace(`/login`);
  }
  return (
    <Switch>
      <Route path="/login" exact={true} component={Login} />
      <Route path="/milestone" component={MilestoneNesting} />
      <TextareaModelConsumer>
        <MilestoneModelConsumer>
          <LabelModelConsumer>
            <AssigneesModelConsumer>
              <AuthorModelConsumer>
                <Route
                  path="/new-issue"
                  exact={true}
                  component={NewIssuePage}
                />
                <Route
                  path="/issue/:idx"
                  exact={true}
                  component={DetailIssuePage}
                />
                <Route path="/" exact={true} component={IssueListPage} />
                <Route path="/label" exact={true} component={LabelPage} />
              </AuthorModelConsumer>
            </AssigneesModelConsumer>
          </LabelModelConsumer>
        </MilestoneModelConsumer>
      </TextareaModelConsumer>
    </Switch>
  );
};
export default IssueTrackerRouter;
