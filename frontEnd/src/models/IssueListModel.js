/*
[
    {
        "idx": 1,
        "author": 1,
        "title": "title1",
        "createdTime": "2020-10-27T09:52:39.000Z",
        "closedTime": null,
        "status": true,
        "milestone": {
            "title": "milestone1"
        },
        "labels": [
            {
                "title": "backend",
                "color": "green",
                "issueLabel": {
                    "issueIdx": 1,
                    "labelIdx": 1
                }
            },
            {
                "title": "frontend",
                "color": "blue",
                "issueLabel": {
                    "issueIdx": 1,
                    "labelIdx": 2
                }
            },
            {
                "title": "important",
                "color": "red",
                "issueLabel": {
                    "issueIdx": 1,
                    "labelIdx": 3
                }
            },
            {
                "title": "error",
                "color": "lightred",
                "issueLabel": {
                    "issueIdx": 1,
                    "labelIdx": 4
                }
            }
        ]
    },
    ...
]
*/

import React, {createContext, useReducer, useEffect, useState} from 'react';
import issueListDummy from './IssueListDummy';
import * as _ from 'lodash';
import axiosMaker from '~/*/utils/axios/axiosMaker';
export const IssueListModelContext = createContext();

export const IssueListInitialize = 'IssueListInitialize';
export const IssueCheckToggle = 'IssueCheckToggle';
export const IssueCheckAll = 'IssueCheckAll';
export const IssueUnCheckAll = 'IssueUnCheckAll';
// export const RequestFilteredIssue = 'RequestFilteredIssue';
// export const RequestFilteredAction = 'RequestFilteredAction';
export const UpdateIssueList = 'UpdateIssueList';
export const UpdateIssueListStatus = 'UpdateIssueListStatus';

import {isTokenExists} from '~/*/components/app/App.js';

export function IssueToggleAction(id) {
  return {
    type: IssueCheckToggle,
    id,
  };
}

export function IssueCheckAllAction() {
  return {
    type: IssueCheckAll,
  };
}

export function IssueUnCheckAllAction() {
  return {
    type: IssueUnCheckAll,
  };
}

export function UpdateIssueListAction(data) {
  return {
    type: UpdateIssueList,
    data,
  };
}

export function UpdateIssueListStatusAction(idxList, status, time) {
  return {
    type: UpdateIssueListStatus,
    idxList,
    status,
    time,
  };
}

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

    case UpdateIssueList: {
      action.data.forEach((data) => {
        data.isCheckBoxChecked = false;
      });
      return action.data;
    }
    case UpdateIssueListStatus: {
      const newData = _.cloneDeep(state);
      const {idxList, status, time} = action;
      const statusBoolean = status == 'Open' ? true : false;
      idxList.forEach((idx) => {
        newData.forEach((data) => {
          if (data.idx === idx) {
            data.status = statusBoolean;
            if (statusBoolean === false) {
              data.closedTime = time;
            }
            return;
          }
        });
      });
      return newData;
    }
    default:
      throw new Error('없는 형식 이네요');
  }
}

const initializeCallAxios = () => {
  return axiosMaker().post('/api/issue/list', {Is: 'open'});
};

const IssueListModelConsumer = ({children}) => {
  const [store, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    initializeCallAxios().then(({data}) => {
      dispatch({
        type: IssueListInitialize,
        data,
      });
    });
  }, [dispatch]);

  const actions = {
    IssueToggleAction,
    IssueCheckAllAction,
    IssueUnCheckAllAction,
    UpdateIssueListAction,
    UpdateIssueListStatusAction,
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
