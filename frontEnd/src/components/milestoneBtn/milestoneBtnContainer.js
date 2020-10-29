import React from 'react';
import MilestoneBtnPresenter from './MilestoneBtnPresenter';
const MilestoneBtnContainer = () => {
  return (
    <MilestoneBtnPresenter
      milestoneClick={() => {
        console.log('Milestone Click');
      }}
      count={1}
    />
  );
};

export default MilestoneBtnContainer;
