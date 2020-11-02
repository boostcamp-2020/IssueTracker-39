import React, {useContext} from 'react';
import CheckBoxWithPresenter from './CheckBoxWithPresenter';
import {IssueListModelContext} from '~/*/models/IssueListModel';

const CheckBoxWithContainer = () => {
  const {count} = useContext(IssueListModelContext);

  return (
    <CheckBoxWithPresenter
      checkBoxClick={() => {
        console.log('checkBoxClick');
      }}
      selectedCount={count}
    />
  );
};

export default CheckBoxWithContainer;
