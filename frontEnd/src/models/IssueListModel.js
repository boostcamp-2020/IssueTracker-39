/*
[
  {
    idx: 1,
    author: Camper1,
    title: 'title1',
    createdTime: '2020-10-27T09:52:39.000Z',
    closedTime: null,
    status: true,
    milestoneIdx: frontEnd,
    isCheckBoxCheckd:boolean, //default False
  },
  {
    idx: 2,
    author: Camper1,
    title: 'title2',
    createdTime: '2020-10-27T09:52:39.000Z',
    closedTime: null,
    status: true,
    milestoneIdx: frontEnd,
    isCheckBoxCheckd:boolean, //default False
  },
]
*/

import React, {createContext, useReducer, useEffect} from 'react';
import issueListDummy from './IssueListDummy';
import * as _ from 'lodash';

export const IssueListModelContext = createContext();

export const IssueListInitialize = 'IssueListInitialize';
export const IssueCheckToggle = 'IssueCheckToggle';
export const IssueCheckAll = 'IssueCheckAll';
export const IssueUnCheckAll = 'IssueUnCheckAll';

export function reducer(state, action) {
  switch (action.type) {
    case IssueListInitialize: {
      action.data.forEach((data) => {
        data.isCheckBoxChecked = false;
      });
      return action.data;
    }

    case IssueCheckToggle: {
      const newData = _.cloneDeep(state);
      let toggleTarget = newData.find((data) => data.idx === action.id);
      toggleTarget.isCheckBoxChecked = !toggleTarget.isCheckBoxChecked;
      return newData;
    }

    case IssueCheckAll: {
      const newData = _.cloneDeep(state);
      newData.forEach((data) => (data.isCheckBoxChecked = true));
      return newData;
    }

    case IssueUnCheckAll: {
      const newData = _.cloneDeep(state);
      newData.forEach((data) => (data.isCheckBoxChecked = false));
      return newData;
    }

    default:
      throw new Error('없는 형식 이네요');
  }
}

export function IssueToggleAction(id) {
  return {
    type: IssueCheckToggle,
    id,
  };
}

export function IssueCheckAllAction(id) {
  return {
    type: IssueCheckAll,
  };
}

export function IssueUnCheckAllAction() {
  return {
    type: IssueUnCheckAll,
  };
}

const IssueListModelConsumer = ({children}) => {
  const [store, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    const data = issueListDummy();
    dispatch({
      type: IssueListInitialize,
      data: issueListDummy(),
    });
  }, [dispatch]);

  const actions = {
    IssueToggleAction,
    IssueCheckAllAction,
    IssueUnCheckAllAction,
  };

  return (
    <IssueListModelContext.Provider
      value={{
        store,
        actions,
        dispatch,
      }}
    >
      {children}
    </IssueListModelContext.Provider>
  );
};

export default IssueListModelConsumer;
