import React from 'react';
import CheckBoxWithPresenter from './CheckBoxWithPresenter';
const CheckBoxWithContainer = () => {
  return (
    <CheckBoxWithPresenter
      checkBoxClick={() => {
        console.log('checkBoxClick');
      }}
      selectedCount={10}
    />
  );
};

export default CheckBoxWithContainer;
