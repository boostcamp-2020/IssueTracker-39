import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MileStonePage from '~/*/pages/milestone/MilestonePage';
import EditMilestonePage from '~/*/pages/edit-milestone/EditMilestonePage';
import CreateMilestonePage from '~/*/pages/create-milestone/CreateMilestonePage';
import MilestoneModelConsumer from '~/*/models/MilestoneModel';
const MilestoneNesting = () => {
  return (
    <MilestoneModelConsumer>
      <Switch>
        <Route path="/milestone" exact={true} component={MileStonePage} />
        <Route
          path="/milestone/new"
          exact={true}
          component={CreateMilestonePage}
        />
        <Route
          path="/milestone/update/:id"
          exact={true}
          component={EditMilestonePage}
        />
      </Switch>
    </MilestoneModelConsumer>
  );
};

export default MilestoneNesting;
