import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Login from '../../pages/login';

const IssueTrackerRouter = ({token}) => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
export default IssueTrackerRouter;
