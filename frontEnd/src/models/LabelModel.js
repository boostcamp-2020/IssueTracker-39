import React, {createContext, useReducer, useEffect} from 'react';
import axiosMaker from '~/*/utils/axios/axiosMaker';
import * as _ from 'lodash';

export const LabelModelContext = createContext();
export const LabelListInitialize = 'LabelListInitialize';
export const CreateLabel = 'CreateLabel';
export const UpdateLabel = 'UpdateLabel';
export const DeleteLabel = 'DeleteLabel';

export function reducer(state, action) {
  switch (action.type) {
    case LabelListInitialize: {
      return action.data;
    }
    case CreateLabel: {
      const {idx, title, description, color} = action.labelData;
      return state.concat({idx, title, description, color});
    }
    case UpdateLabel: {
      const {idx, title, description, color} = action.labelData;
      return state.map((label) =>
        label.idx === idx ? {idx, title, description, color} : label,
      );
    }
    case DeleteLabel: {
      const idx = action.idx;
      return state.filter((label) => label.idx !== idx);
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
    idx: data.idx,
    title: data.title,
    color: data.color,
    description: data.description,
  }));
};

const LabelModelConsumer = ({children}) => {
  const [store, dispatch] = useReducer(reducer, []);

  const requestCreate = async (body) => {
    const {
      data: {idx},
    } = await axiosMaker().post('/api/label', body);
    const {title, description, color} = body;
    dispatch({type: CreateLabel, labelData: {idx, title, description, color}});
  };
  const requestUpdate = async (body) => {
    const {idx} = body;
    const {data} = await axiosMaker().put(`/api/label/${idx}`, body);
    if (data) {
      dispatch({type: UpdateLabel, labelData: body});
    }
  };
  const requestDelete = async (idx) => {
    const {data} = await axiosMaker().delete(`/api/label/${idx}`);
    if (data) {
      dispatch({type: DeleteLabel, idx});
    }
  };

  const requestApiManager = {
    requestCreate,
    requestDelete,
    requestUpdate,
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
