import React from 'react';
import {Switch,Route} from 'react-router-dom';
import MileStonePage from '~/*/pages/milestone/MileStonePage';
import EditMilestonePage from '~/*/pages/edit-milestone/EditMilestonePage';
import CreateMilestonePage from '~/*/pages/create-milestone/CreateMilestonePage';
const MilestoneNesting = ()=>{
  return(
    <Switch>
      <Route path="/milestone" exact={true} component={MileStonePage} />
      <Route path="/milestone/new" exact={true} component={CreateMilestonePage}/>
      <Route path="/milestone/update/:id" exact={true} component={EditMilestonePage}/> 
    </Switch>
  );
}

export default MilestoneNesting;