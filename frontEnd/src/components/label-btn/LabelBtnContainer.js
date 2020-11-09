import React, {useContext} from 'react';
import LabelBtnPresenter from './LabelBtnPresenter';
import {modelStore} from '~/*/models/store';

const LabelBtnContainer = () => {
  const {store} = useContext(modelStore.Label);
  return <LabelBtnPresenter count={store.length} />;
};

export default LabelBtnContainer;
