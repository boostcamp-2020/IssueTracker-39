import React, {createContext, useReducer, useEffect} from 'react';
import axiosMaker from '~/*/utils/axios/axiosMaker';
import * as _ from 'lodash';

export const LabelModelContext = createContext();
export const LabelListInitialize = 'LabelListInitialize';

export function reducer(state, action) {
  switch (action.type) {
    case LabelListInitialize: {
      return action.data;
    }
    default:
      throw new Error('없는 형식을 보냈네요');
  }
}

const callAxios = () => {
  return axiosMaker().get('/api/label/list');
};

const LabelModelConsumer = ({children}) => {
  const [store, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    callAxios().then(({data}) => {
      dispatch({
        type: LabelListInitialize,
        data,
      });
    });
  }, [dispatch]);

  return (
    <LabelModelContext.Provider
      value={{
        store,
        dispatch,
      }}
    >
      {children}
    </LabelModelContext.Provider>
  );
};

export default LabelModelConsumer;
