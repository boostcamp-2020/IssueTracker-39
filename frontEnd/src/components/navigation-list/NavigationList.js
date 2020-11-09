import React from 'react';
import styled from 'styled-components';
import LabelBtnPresenter from '~/*/components/label-btn/LabelBtnPresenter';
import MilestoneBtnPresenter from '~/*/components/milestone-btn/MilestoneBtnPresenter';
import navigationHooks from './navigationHooks';

const ButtonListLayout = styled.div`
  display: inline-flex;
  flex-direction: row;
`;
const NavigationList = () => {
  const {isLabelMatch, isMileStoneMatch} = navigationHooks();
  return (
    <ButtonListLayout>
      <LabelBtnPresenter select={isLabelMatch}></LabelBtnPresenter>
      <MilestoneBtnPresenter select={isMileStoneMatch}></MilestoneBtnPresenter>
    </ButtonListLayout>
  );
};

export default NavigationList;
