import React, {useEffect} from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';

import IssueList from '../../pages/issueList';
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
        <IssueList />
      </Route>
      <Route path="/login" exact={true}>
        <Login />
      </Route>
    </Switch>
  );
};
export default IssueTrackerRouter;
