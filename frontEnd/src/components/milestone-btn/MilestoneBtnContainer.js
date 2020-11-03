import React, {useContext} from 'react';
import MilestoneBtnPresenter from './MilestoneBtnPresenter';
import {MilestoneModelContext} from '~/*/models/MilestoneModel';

const MilestoneBtnContainer = () => {
  const {store} = useContext(MilestoneModelContext);
  return (
    <MilestoneBtnPresenter milestoneClick={() => {}} count={store.length} />
  );
};

export default MilestoneBtnContainer;
