import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';

import magnifierImage from '~/*/images/magnifier.png';
import {modelStore} from '~/*/models/store';

const inputBoxBackgroundColor = 'rgb(250, 252, 253)';

const FilterInputBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${inputBoxBackgroundColor};
  border: 1px solid lightgray;
  border-radius: 0 5px 5px 0;
  box-shadow: ${(props) =>
    props.inputFocused ? '0 0 2px 2px lightskyblue' : ''};
`;

const InputWrapper = styled.input`
  width: 100%;
  border: none;
  background-color: ${inputBoxBackgroundColor};
  border-radius: 0 5px 5px 0;
  &:focus {
    outline: none;
  }
`;

const SpanWrapper = styled.span`
  align-self: center;
  margin: 0 5px;
`;

const FilterInputBox = ({onFocus, onBlur, inputFocused}) => {
  const filterRegs = {
    isReg: /(is:\w+)/g,
    labelReg: /(label:\w+)/g,
    milestoneReg: /(milestone:\w+)/g,
    authorReg: /(author:\w+)/g,
    assigneeReg: /(assignee:\w+)/g,
  };

  const changeInput = (store) => {
    return Object.keys(store).reduce((acc, curr) => {
      if (store[curr] === undefined) {
        return acc;
      }
      return acc + curr + ':' + store[curr] + ' ';
    }, '');
  };

  const {store, actions, dispatch} = useContext(modelStore.Filter);
  const [inputValue, setInputValue] = useState(changeInput(store));

  useEffect(() => {
    setInputValue(changeInput(store));
  }, [store]);

  const keyPress = (e) => {
    if (e.key != 'Enter') return;
    /**
     * @TODO
     * syncronize with model
     */
  };

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <FilterInputBoxWrapper inputFocused={inputFocused}>
      <SpanWrapper>
        <img width="25px" src={magnifierImage}></img>
      </SpanWrapper>
      <InputWrapper
        type="text"
        value={inputValue}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        onKeyPress={(e) => keyPress(e)}
        onChange={(e) => changeInputValue(e)}
        placeholder="Search All Issues"
      />
    </FilterInputBoxWrapper>
  );
};

export default FilterInputBox;
