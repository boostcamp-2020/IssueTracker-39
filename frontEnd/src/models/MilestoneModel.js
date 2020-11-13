import React, {createContext, useEffect, useReducer} from 'react';
import axiosMaker from '~/*/utils/axios/axiosMaker';

const MilestoneInitialize = 'MilestoneInitialize';
export const MilestoneModelContext = createContext();

const CLOSE_MILESTONE = 'CLOSE_MILESTONE';
const DELETE_MILESTONE = 'DELETE_MILESTONE';
const CREATE_MILESTONE = 'CREATE_MILESTONE';
const UPDATE_MILESTONE = 'UPDATE_MILESTONE';

function stateImmutableCreator(state) {
  const newArray = [];
  state.forEach((milestone) => {
    newArray.push({
      ...milestone,
    });
  });
  return newArray;
}

//getDropDownItem

function reducer(state, action) {
  switch (action.type) {
    case MilestoneInitialize: {
      return action.data;
    }
    case CLOSE_MILESTONE: {
      state.find((milestone) => milestone.idx === action.id).opened = false;
      return stateImmutableCreator(state);
    }

    case DELETE_MILESTONE: {
      return state.filter((milestone) => milestone.idx !== action.id);
    }
    case CREATE_MILESTONE: {
      action.milestone.openedIssues = 0;
      action.milestone.closedIssues = 0;
      state.push(action.milestone);
      return stateImmutableCreator(state);
    }
    case UPDATE_MILESTONE: {
      const targetMilestone = state.find(
        (milestone) => milestone.idx === action.id,
      );

      targetMilestone.title = action.title;
      targetMilestone.dueDate = new Date(action.date).toISOString();
      targetMilestone.description = action.description;

      return stateImmutableCreator(state);
    }
    default:
      throw new Error('Error MilestoneModel');
  }
}

function getDropDownItem(store) {
  return store.map((data) => ({
    idx: data.idx,
    title: data.title,
    openedIssues: data.openedIssues,
    closedIssues: data.closedIssues,
    opened: data.opened,
  }));
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

  const requestCloseMilestone = async (id) => {
    const axiosInstance = axiosMaker();
    const result = await axiosInstance.put('/api/milestone/close', {
      id,
    });
    if (result.status === 200) {
      dispatch({
        type: CLOSE_MILESTONE,
        id,
      });
    }
  };

  const requestDeleteMilestone = async (id) => {
    const axiosInstance = axiosMaker();
    const result = await axiosInstance.delete(`/api/milestone/${id}`);
    if (result.status === 200) {
      dispatch({
        type: DELETE_MILESTONE,
        id,
      });
    }
  };

  const requestCreateMilestone = async (title, date, description) => {
    const axiosInstance = axiosMaker();
    const result = await axiosInstance.post('/api/milestone', {
      title,
      date,
      description,
    });
    if (result.status === 200) {
      dispatch({
        type: CREATE_MILESTONE,
        milestone: result.data.newMilestone,
      });
    }
  };

  //Update Milestone
  const requestUpdateMilestone = async (id, title, date, description) => {
    const axiosInstance = axiosMaker();
    const result = await axiosInstance.put(`/api/milestone/${id}`, {
      title,
      date,
      description,
    });
    if (result.status === 200) {
      dispatch({
        type: UPDATE_MILESTONE,
        id,
        title,
        date,
        description,
      });
    }
  };

  const requests = {
    requestCloseMilestone,
    requestDeleteMilestone,
    requestCreateMilestone,
    requestUpdateMilestone,
  };

  return (
    <MilestoneModelContext.Provider
      value={{
        store,
        getDropDownItem,
        dispatch,
        requests,
      }}
    >
      {children}
    </MilestoneModelContext.Provider>
  );
};

export default MilestoneModelConsumer;
