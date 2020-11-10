import {useReducer} from 'react';
import MilestoneFormVO from '~/*/vo/milestoneFormVO';
const TitleUpdate = 'TitleUpdate';
const DateUpdate = 'DateUpdate';
const DescriptionUpdate = 'DescriptionUpdate';
const MilestoneChange = 'MilestoneChange';
function reducer(state, action) {
  switch (action.type) {
    case MilestoneChange: {
      return {
        ...state,
        title: action.title,
        date: action.date,
        description: action.description,
      };
    }
    case TitleUpdate: {
      return {
        ...state,
        title: action.title,
      };
    }
    case DateUpdate: {
      return {
        ...state,
        date: action.date,
      };
    }
    case DescriptionUpdate: {
      return {
        ...state,
        description: action.description,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

const formHooks = () => {
  const initialValue = new MilestoneFormVO();
  const [store, dispatch] = useReducer(reducer, {
    ...initialValue,
  });

  const titleChange = (e) => {
    dispatch({
      type: TitleUpdate,
      title: e.target.value,
    });
  };

  const dateChange = (e) => {
    dispatch({
      type: DateUpdate,
      date: e.target.value,
    });
  };

  const descriptionChange = (e) => {
    dispatch({
      type: DescriptionUpdate,
      description: e.target.value,
    });
  };

  const changes = {
    titleChange,
    dateChange,
    descriptionChange,
  };

  const valueChange = (state) => {
    return {
      type: MilestoneChange,
      ...state,
    };
  };

  return {
    store,
    dispatch,
    changes,
    valueChange,
  };
};

export default formHooks;
