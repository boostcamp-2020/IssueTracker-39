import React, {useState, useEffect, useContext, useRef} from 'react';
import styled from 'styled-components';

import FilterDropdown from './FilterDropdown';
import FilterInputBox from './FilterInputBox';
import clickOutSide from '~/*/utils/custom-hooks/clickOutSide';
import {modelStore} from '~/*/models/store';
/**
 * 필터 Slide Bar
 * 필터 검색 Input Box
 */

const filterList = {
  'Open Issues': 'Is:open',
  'Your Issues': 'Author:@me',
  'Everything Assigned to you': 'Assignee:@me',
  'Everyrthing commented': 'Not Implemented',
  'Closed Issues': 'Is:close',
};

const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  height: 33px;
  width: 600px;
`;

const FilterBtn = styled.button`
  width: 20%;
  border: none;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 5px 0 0 5px;
  background-color: ${(props) =>
    props.isHovered ? 'rgb(244,245,247)' : 'rgb(250, 251, 252)'};
  margin-right: -1px;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background-color: rgb(243, 244, 246);
  }
`;

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const dropdownRef = useRef();

  const changeInput = (store) => {
    return Object.keys(store).reduce((acc, curr) => {
      if (store[curr] === undefined) {
        return acc;
      }
      return acc + curr + ':' + store[curr] + ' ';
    }, '');
  };

  const {store} = useContext(modelStore.Filter);
  const [inputValue, setInputValue] = useState(changeInput(store));

  const btnHover = () => {
    setBtnHovered(true);
  };
  const btnNotHover = () => {
    setBtnHovered(false);
  };
  const filterOnClick = () => {
    setShowFilter((state) => !state);
  };
  const onInputFocus = () => {
    setInputFocused(true);
  };
  const onInputBlur = () => {
    setInputFocused(false);
  };
  const dropdownClickHandler = ({target}) => {
    if (!showFilter) return;
    const result = [...dropdownRef.current.children].filter(
      (children) => children === target,
    );
    if (result.length === 0) {
      setShowFilter(false);
      return;
    }
    setInputValue(filterList[target.value]);
    setShowFilter(false);
  };

  return (
    <FilterWrapper>
      <FilterBtn
        onClick={() => filterOnClick()}
        onMouseEnter={() => btnHover()}
        onMouseLeave={() => btnNotHover()}
        isHovered={btnHovered}
      >
        Filters&#9662;
      </FilterBtn>
      {showFilter && (
        <FilterDropdown
          filterList={Object.keys(filterList)}
          showFilter={showFilter}
          dropdownRef={dropdownRef}
          dropdownClickHandler={dropdownClickHandler}
        ></FilterDropdown>
      )}
      <FilterInputBox
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        inputFocused={inputFocused}
        inputValue={inputValue}
        setInputValue={setInputValue}
        changeInput={changeInput}
      ></FilterInputBox>
    </FilterWrapper>
  );
};

export default Filter;
