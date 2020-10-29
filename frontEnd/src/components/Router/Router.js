import React, {useEffect} from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';

import IssueListPage from '../../pages/issueListPage/issueListPage.js';
import Login from '../../pages/login';

const IssueTrackerRouter = ({token}) => {
  const history = useHistory();
  useEffect(() => {
    if (!!token) {
      history.replace('/');
    } else {
      history.replace('/login');
    }
  }, []);
  return (
    <Switch>
      <Route path="/" exact={true}>
        <IssueListPage />
      </Route>
      <Route path="/login" exact={true}>
        <Login />
      </Route>
    </Switch>
  );
};
export default IssueTrackerRouter;
