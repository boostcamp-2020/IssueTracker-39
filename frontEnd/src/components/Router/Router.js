import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import Login from '../../pages/login';

const IssueTrackerRouter = ({token}) => {
  return (
    <HashRouter>
      {!!token ? (
        <Redirect path="*" to="/" />
      ) : (
        <Redirect path="*" to="/login" />
      )}
      <Switch>
        <Route path="/" exact={true}>
          메인!
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
      </Switch>
    </HashRouter>
  );
};
export default IssueTrackerRouter;
