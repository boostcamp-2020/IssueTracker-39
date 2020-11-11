import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import axiosMaker from '~/*/utils/axios/axiosMaker';
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

const synchronizeModel = (filterStr, actions, dispatch) => {
  const filterRegs = {
    Is: /(Is:open)|(Is:closed)/g,
    Author: /(Author:[\w_\-@.]+)/g,
    Label: /(Label:([\w_\-@.]+|"[\w_\-@. ]+"))/g,
    Milestone: /(Milestone:([\w_\-@.]+|"[\w_\-@. ]+"))/g,
    Assignee: /(Assignee:[\w_\-@.]+)/g,
  };

  const parsedFilter = {};
  Object.keys(filterRegs).forEach((reg) => {
    const regResult = filterStr.match(filterRegs[reg]);
    if (!regResult) {
      dispatch(actions[reg](undefined));
      return;
    }
    const regSplitted = regResult[0].split(':');
    if (!regSplitted) return;
    dispatch(actions[reg](regSplitted[1]));
    parsedFilter[reg] = regSplitted[1];
  });

  return parsedFilter;
};

const FilterInputBox = ({
  inputValue,
  setInputValue,
  onFocus,
  onBlur,
  inputFocused,
  clearInputValue,
}) => {
  const {store, actions, dispatch} = useContext(modelStore.Filter);
  const {
    store: issueStore,
    actions: issueActions,
    dispatch: issueDispatch,
  } = useContext(modelStore.IssueList);

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

  const keyPress = (e) => {
    if (e.key != 'Enter') return;
    const filterStr = e.target.value;
    const parsedFilter = synchronizeModel(filterStr, actions, dispatch);
    axiosMaker()
      .post('/api/issue/list', parsedFilter)
      .then(({data}) => {
        issueDispatch(issueActions.UpdateIssueListAction(data));
      });
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
      {inputValue.length !== 0 && (
        <SpanWrapper onClick={clearInputValue}>
          <CancelBtnStyle>X</CancelBtnStyle>
        </SpanWrapper>
      )}
    </FilterInputBoxWrapper>
  );
};

export default FilterInputBox;
