import React, {useReducer, useContext} from 'react';
import styled from 'styled-components';
import {LabelModelContext} from '~/*/models/LabelModel';
import LabelItem from '~/*/components/label/LabelItem';
import LabelInputBox from './LabelInputBox';
import {getRandomColor} from '~/*/utils/getRandomColor';

const LabelListStyle = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
`;
const LabelListHeader = styled.div`
  height: 45px;
  background-color: #f6f8fa;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case 'StartEdit': {
      const idx = action.idx;
      return {
        ...state,
        [idx]: {...action.initialData},
      };
    }
    case 'CancelEdit': {
      const idx = action.idx;
      return {
        ...state,
        [idx]: undefined,
      };
    }
    case 'ChangeState': {
      const {idx, name, value} = action;
      return {
        ...state,
        [idx]: {
          ...state[idx],
          [name]: value,
        },
      };
    }
    case 'ChangeColor': {
      const {idx, color} = action;
      return {
        ...state,
        [idx]: {
          ...state[idx],
          color,
        },
      };
    }
    default: {
      return state;
    }
  }
};

const LabelList = () => {
  const {store, requestApiManager} = useContext(LabelModelContext);
  const [labelInputs, dispatch] = useReducer(reducer, {});
  const startEdit = (idx) => {
    const [initialData] = store.filter((data) => data.idx === idx);
    dispatch({type: 'StartEdit', idx, initialData});
  };
  const reset = (e, idx) => {
    dispatch({type: 'CancelEdit', idx});
  };
  const saveChange = async (index) => {
    const {idx, title, description, color} = labelInputs[index];
    await requestApiManager.requestUpdate({idx, title, description, color});
    dispatch({type: 'CancelEdit', idx});
  };
  const deleteLabel = (idx) => {
    requestApiManager.requestDelete(idx);
  };
  const onChange = (e, idx) => {
    const {name, value} = e.target;
    dispatch({type: 'ChangeState', idx, name, value});
  };
  const setRandomColor = (idx) => {
    dispatch({type: 'ChangeColor', idx, color: getRandomColor()});
  };
  return (
    <LabelListStyle>
      <LabelListHeader>{store.length} Labels</LabelListHeader>
      {store.map((data) => (
        <div key={data.idx}>
          {labelInputs[data.idx] ? (
            <>
              <LabelItem
                data={labelInputs[data.idx]}
                startEdit={startEdit}
                deleteLabel={deleteLabel}
              ></LabelItem>
              <LabelInputBox
                inputs={labelInputs[data.idx]}
                onSubmit={saveChange}
                reset={reset}
                onChange={onChange}
                setRandomColor={setRandomColor}
                buttonName={'Save Changes'}
              />
            </>
          ) : (
            <LabelItem
              data={data}
              startEdit={startEdit}
              deleteLabel={deleteLabel}
            ></LabelItem>
          )}
        </div>
      ))}
    </LabelListStyle>
  );
};

export default LabelList;
