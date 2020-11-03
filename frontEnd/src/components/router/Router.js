import React, {useEffect} from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';

import IssueListPage from '../../pages/issue-list-page/IssueListPage';
import Login from '../../pages/login';

import LabelModelConsumer from '~/*/models/LabelModel';
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
      <Route path="/home" exact={true}>
        <MilestoneModelConsumer>
          <LabelModelConsumer>
            <AssigneesModelConsumer>
              <AuthorModelConsumer>
                <IssueListPage />
              </AuthorModelConsumer>
            </AssigneesModelConsumer>
          </LabelModelConsumer>
        </MilestoneModelConsumer>
      </Route>
    </Switch>
  );
};
export default IssueTrackerRouter;
