import React, {useContext, useState, useEffect, useMemo} from 'react';
import CheckBoxWithPresenter from './CheckBoxWithPresenter';
import {IssueListModelContext} from '~/*/models/IssueListModel';
import * as _ from 'lodash';

const CheckBoxWithContainer = ({reference}) => {
  const {store, dispatch, actions} = useContext(IssueListModelContext);

  const [check, setCheck] = useState(false);

  const count = useMemo(
    () =>
      store.reduce((acc, curr, id) => {
        if (curr.isCheckBoxChecked) {
          return acc + 1;
        }
        return acc;
      }, 0),
    [store],
  );

  useEffect(() => {
    if (count === store.length && store.length != 0) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [count]);

  const checkHandler = () => {
    if (check) {
      dispatch(actions.IssueUnCheckAllAction());
      setCheck(false);
      return;
    }
    dispatch(actions.IssueCheckAllAction());
    setCheck(true);
  };

  return (
    <CheckBoxWithPresenter
      checkBoxClick={checkHandler}
      selectedCount={count}
      selectCheck={check}
      reference={reference}
    />
  );
};

export default CheckBoxWithContainer;
