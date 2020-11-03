import React, {useEffect} from 'react';
import LabelListModelConsumer from '~/*/models/label-model/LabelListModel';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';

import IssueListPage from '../../pages/issue-list-page/IssueListPage';
import Login from '../../pages/login';
import AssigneesModelConsumer from '~/*/models/AssigneesModel';

import MilestoneModelConsumer from '~/*/models/MilestoneModel';

import AuthorModelConsumer from '~/*/models/AuthorModel';

const IssueTrackerRouter = ({token}) => {
  const history = useHistory();
  useEffect(() => {
    if (!!token) {
      history.replace('/home');
    } else {
      history.replace('/login');
    }
  }, []);
  return (
    <Switch>
      <Route path="/login" exact={true}>
        <Login />
      </Route>
      <MilestoneModelConsumer>
        <LabelListModelConsumer>
          <AssigneesModelConsumer>
            <AuthorModelConsumer>
        <Route path="/home" exact={true}>
          <IssueListPage />
        </Route>
            </AuthorModelConsumer>
          </AssigneesModelConsumer>
        </LabelListModelConsumer>
      </MilestoneModelConsumer>
    </Switch>
  );
};
export default IssueTrackerRouter;
