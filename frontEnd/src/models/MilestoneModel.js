import React, {createContext, useEffect, useReducer} from 'react';
import axiosMaker from '~/*/utils/axios/axiosMaker';

const MilestoneInitialize = 'MilestoneInitialize';
export const MilestoneModelContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case MilestoneInitialize: {
      return action.data;
    }
    default:
      throw new Error('Error MilestoneModel');
  }
}

const callAxios = () => {
  return axiosMaker().get('/api/milestone/list');
};

const MilestoneModelConsumer = ({children}) => {
  const [store, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    callAxios().then(({data}) => {
      dispatch({
        type: MilestoneInitialize,
        data,
      });
    });
  }, [dispatch]);

  return (
    <MilestoneModelContext.Provider
      value={{
        store,
        dispatch,
      }}
    >
      {children}
    </MilestoneModelContext.Provider>
  );
};

export default MilestoneModelConsumer;
