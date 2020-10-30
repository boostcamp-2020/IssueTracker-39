/**
 * @할일
 * context API 만들기
 * API Store 만들기
 * Store 데이터를 변경할 함수인 Reducer 만들기 ( 불변성 조심 ! )
 * ContxtAPI Provider가 제공하는 정보에 접근할 수 있는 Consumer 컴포넌트 만들어주기
 * IssueList에 연결해보고 접근 가능한지 보기 [test]
 * IssueList에서 Reducer 함수를 쓸 수 있는지 보기
 */

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
import issueListDummy from './issueListDummy';
import * as _ from 'lodash';

export const IssueListModelContext = createContext();

/**
 * @요구사항1
 *
 * IssueListModelConsumer
 * 첫 렌더링시 API에 접근하여 데이터를 가져온후 store에 넣어줘야한다.
 *
 * @요구사항2
 * 체크박스 상태를 저장해야한다.
 *
 * @요구사항 3
 * 체크박스 누르면 전체 이슈에 체크박스 상태를 변경해야한다.
 */

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
    IssueToggle: (id) => {
      dispatch({
        type: IssueCheckToggle,
        id,
      });
    },
    IssueCheckAll: () => {
      dispatch({
        type: IssueCheckAll,
      });
    },
    IssueUnCheckAll: () => {
      dispatch({
        type: IssueUnCheckAll,
      });
    },
  };

  return (
    <IssueListModelContext.Provider
      value={{
        store,
        actions,
      }}
    >
      {children}
    </IssueListModelContext.Provider>
  );
};

export default IssueListModelConsumer;
