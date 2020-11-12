import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import magnifierImage from '~/*/images/magnifier.png';
import {modelStore, IssueList} from '~/*/models/store';

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
const CancelBtnStyle = styled.div`
  cursor: pointer;
  margin-right: 5px;
  font-weight: bold;
  color: lightgray;
`;

const FilterInputBox = ({
  inputValue,
  setInputValue,
  onFocus,
  onBlur,
  inputFocused,
  clearInputValue,
  sendRequestEvent,
}) => {
  const {store} = useContext(modelStore.Filter);

  const changeInput = (store) => {
    return Object.keys(store).reduce((acc, curr) => {
      if (store[curr] === undefined) {
        return acc;
      }
      return acc + curr + ':' + store[curr] + ' ';
    }, '');
  };

  useEffect(() => {
    setInputValue(changeInput(store));
  }, [store]);

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
        onKeyPress={(e) => sendRequestEvent(e)}
        onChange={(e) => changeInputValue(e)}
        placeholder="Search All Issues"
      />
      {inputValue.replaceAll(' ', '') !== 'Is:open' && (
        <SpanWrapper onClick={clearInputValue}>
          <CancelBtnStyle>X</CancelBtnStyle>
        </SpanWrapper>
      )}
    </FilterInputBoxWrapper>
  );
};

export default FilterInputBox;
