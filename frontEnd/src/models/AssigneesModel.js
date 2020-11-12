import React, {createContext, useReducer, useEffect} from 'react';
import * as _ from 'lodash';
import axiosMaker from '~/*/utils/axios/axiosMaker';
export const AssigneesModelContext = createContext();

export const AssigneesInitialize = 'AssigneesInitialize';

export function reducer(state, action) {
  switch (action.type) {
    case AssigneesInitialize: {
      return action.data;
    }
    default:
      throw new Error('없는 형식 이네요');
  }
}

const callAxios = () => {
  return axiosMaker().get('/api/assignee/list');
};

export function getDropDownItem(store) {
  return store.map((data) => ({
    idx: data.idx,
    title: data.userId,
  }));
}

const AssigneesModelConsumer = ({children}) => {
  const [store, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    callAxios().then(({data}) => {
      dispatch({
        type: AssigneesInitialize,
        data,
      });
    });
  }, [dispatch]);

  const actions = {
    AssigneesInitialize,
  };

  return (
    <AssigneesModelContext.Provider
      value={{
        store,
        actions,
        dispatch,
        getDropDownItem,
      }}
    >
      {children}
    </AssigneesModelContext.Provider>
  );
};

export default AssigneesModelConsumer;
