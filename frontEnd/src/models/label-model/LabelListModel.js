import React, {createContext, useReducer, useEffect} from 'react';
import axiosMaker from '~/*/utils/axios/axiosMaker';
import * as _ from 'lodash';

const axiosInstance = axiosMaker();
export const LabelListContext = createContext();
export const LabelListInitialize = 'LabelListInitialize';

export function LabelListInitializeAction(data) {
  return {
    type: LabelListInitialize,
    data,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case LabelListInitialize: {
      return action.data;
    }
    default:
      throw new Error('없는 형식을 보냈네요');
  }
}

const getLabelList = (dispatch) => {
  axiosInstance.get('/api/label/list').then(({data}) => {
    dispatch(LabelListInitializeAction(data));
  });
};

const LabelListModelConsumer = ({children}) => {
  const [store, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    getLabelList(dispatch);
  }, [dispatch]);

  const actions = {};

  return (
    <LabelListContext.Provider
      value={{
        store,
        dispatch,
        actions,
      }}
    >
      {children}
    </LabelListContext.Provider>
  );
};

export default LabelListModelConsumer;
