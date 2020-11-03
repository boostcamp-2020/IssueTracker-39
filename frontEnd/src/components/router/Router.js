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

import MilestoneModelConsumer from '~/*/models/MilestoneModel';

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
        <Route path="/home" exact={true}>
          <IssueListPage />
        </Route>
        </LabelListModelConsumer>
      </MilestoneModelConsumer>

    </Switch>
  );
};
export default IssueTrackerRouter;
