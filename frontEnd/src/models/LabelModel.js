import React, {createContext, useReducer, useEffect} from 'react';
import axiosMaker from '~/*/utils/axios/axiosMaker';
import * as _ from 'lodash';

export const LabelModelContext = createContext();
export const LabelListInitialize = 'LabelListInitialize';
export const CreateLabel = 'CreateLabel';

export function reducer(state, action) {
  switch (action.type) {
    case LabelListInitialize: {
      return action.data;
    }
    case CreateLabel: {
      const {idx, title, description, color} = action.labelData;
      return state.concat({idx, title, description, color});
    }
    default:
      throw new Error('없는 형식을 보냈네요');
  }
}

const callAxios = () => {
  return axiosMaker().get('/api/label/list');
};

const getDropDownItem = (store) => {
  return store.map((data) => ({
    title: data.title,
    color: data.color,
    description: data.description,
  }));
};

const LabelModelConsumer = ({children}) => {
  const [store, dispatch] = useReducer(reducer, []);

  const requestCreate = async (body) => {
    const {data: idx} = await axiosMaker().post('/api/label', body);
    const {title, description, color} = body;
    dispatch({type: CreateLabel, labelData: {idx, title, description, color}});
  };

  const requestApiManager = {
    requestCreate,
  };

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
        getDropDownItem,
        requestApiManager,
      }}
    >
      {children}
    </LabelModelContext.Provider>
  );
};

export default LabelModelConsumer;
