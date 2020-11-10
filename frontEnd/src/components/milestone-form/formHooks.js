import {useReducer} from 'react';
const TitleUpdate = 'TitleUpdate';
const DateUpdate = 'DateUpdate';
const DescriptionUpdate = 'DescriptionUpdate';
function reducer(state, action) {
  switch (action.type) {
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

const formHooks = (
  initialValue = {
    title: '',
    description: '',
    date: new Date().toISOString().substr(0, 10),
  },
) => {
  const [store, dispatch] = useReducer(reducer, initialValue);
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

  return {
    store,
    dispatch,
    changes,
  };
};

export default formHooks;
