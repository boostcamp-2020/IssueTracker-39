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
import AssigneesModelConsumer from '~/*/models/AssigneesModel';

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
      <AssigneesModelConsumer>
        <Route path="/home" exact={true}>
          <IssueListPage />
        </Route>
      </AssigneesModelConsumer>
    </Switch>
  );
};
export default IssueTrackerRouter;
