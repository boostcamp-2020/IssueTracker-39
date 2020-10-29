import React, {useState, useRef} from 'react';
import styled from 'styled-components';

import FilterDropdown from './FilterDropdown';
import FilterInputBox from './FilterInputBox';

/**
 * 필터 Slide Bar
 * 필터 검색 Input Box
 */

const filterList = [
  'Open Issues',
  'Your Issues',
  'Everything Assigned to you',
  'Everyrthing commented',
  'Closed Issues',
];

const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  height: 40px;
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
  font-size: 15px;
  font-weight: bold;
  $:hover {
    background-color: rgb(243, 244, 246);
  }
`;

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  const btnHover = () => {
    setBtnHovered(true);
  };
  const btnNotHover = () => {
    setBtnHovered(false);
  };
  const filterOnClick = () => {
    setShowFilter(!showFilter);
  };
  const filterOnBlur = () => {
    setShowFilter(false);
  };
  const onFocus = () => {
    setInputFocused(true);
  };
  const onBlur = () => {
    setInputFocused(false);
  };
  return (
    <FilterWrapper>
      <FilterBtn
        onClick={() => filterOnClick()}
        onBlur={() => filterOnBlur()}
        onMouseEnter={() => btnHover()}
        onMouseLeave={() => btnNotHover()}
        isHovered={btnHovered}
      >
        Filters&#9662;
      </FilterBtn>
      <FilterDropdown
        filterList={filterList}
        showFilter={showFilter}
      ></FilterDropdown>
      <FilterInputBox
        onFocus={onFocus}
        onBlur={onBlur}
        inputFocused={inputFocused}
      ></FilterInputBox>
    </FilterWrapper>
  );
};

export default Filter;
