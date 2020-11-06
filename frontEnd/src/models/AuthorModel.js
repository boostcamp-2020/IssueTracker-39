import React, {createContext, useReducer, useEffect} from 'react';
import * as _ from 'lodash';

import axiosMaker from '~/*/utils/axios/axiosMaker';
export const AuthorModelContext = createContext();
export const AuthorListInitialize = 'AuthorListInitialize';

const getDropDownItem = (store) => {
  return store.map((data) => ({
    title: data.userId,
  }));
};

const reducer = (state, action) => {
  switch (action.type) {
    case AuthorListInitialize: {
      return action.data;
    }
    default:
      throw new Error('없는 형식 이네요');
  }
};

const callAxios = () => {
  return axiosMaker().get('/api/author/list');
};

const AuthorModelConsumer = ({children}) => {
  const [store, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    callAxios().then(({data}) => {
      dispatch({
        type: AuthorListInitialize,
        data,
      });
    });
  }, [dispatch]);

  return (
    <AuthorModelContext.Provider
      value={{
        store,
        dispatch,
        getDropDownItem,
      }}
    >
      {children}
    </AuthorModelContext.Provider>
  );
};

export default AuthorModelConsumer;
export {reducer};
