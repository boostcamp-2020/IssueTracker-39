import React, {useState, useEffect, useContext, useRef} from 'react';
import styled from 'styled-components';

import FilterDropdown from './FilterDropdown';
import FilterInputBox from './FilterInputBox';
import {modelStore} from '~/*/models/store';
import useDropdownVisibility from '~/*/utils/custom-hooks/filter-custom-hooks/useDropdownVisibility';
import useInputFocused from '~/*/utils/custom-hooks/filter-custom-hooks/useInputFocused';
import useBtnHovered from '~/*/utils/custom-hooks/filter-custom-hooks/useBtnHovered';
import useInputValue from '~/*/utils/custom-hooks/filter-custom-hooks/useInputValue';
/**
 * 필터 Slide Bar
 * 필터 검색 Input Box
 */

const filterList = {
  'Open Issues': 'Is:open',
  'Your Issues': 'Author:@me',
  'Everything Assigned to you': 'Assignee:@me',
  'No Filter': '',
  'Closed Issues': 'Is:closed',
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
  const {
    dropdownVisibility,
    filterOnClick,
    hideDropdown,
  } = useDropdownVisibility(false);
  const {inputFocused, onInputFocus, onInputBlur} = useInputFocused(false);
  const {btnHovered, btnHover, btnNotHover} = useBtnHovered(false);
  const dropdownRef = useRef();
  const {
    inputValue,
    setInputValue,
    dropdownClickHandler,
    clearInputValue,
    sendRequest,
    sendRequestEvent,
  } = useInputValue({
    initialState: 'Is:open',
    dropdownVisibility,
    dropdownRef,
    hideDropdown,
    filterList,
  });

  const requestWhenDropdownClick = (e) => {
    const filterString = dropdownClickHandler(e);
    sendRequest(filterString);
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
      {dropdownVisibility && (
        <FilterDropdown
          filterList={Object.keys(filterList)}
          dropdownVisibility={dropdownVisibility}
          dropdownRef={dropdownRef}
          dropdownClickHandler={requestWhenDropdownClick}
        ></FilterDropdown>
      )}
      <FilterInputBox
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        inputFocused={inputFocused}
        inputValue={inputValue}
        setInputValue={setInputValue}
        clearInputValue={clearInputValue}
        sendRequestEvent={sendRequestEvent}
      ></FilterInputBox>
    </FilterWrapper>
  );
};

export default Filter;
