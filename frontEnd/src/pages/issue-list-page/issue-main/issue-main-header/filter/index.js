import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

import FilterDropdown from './FilterDropdown';
import FilterInputBox from './FilterInputBox';
import clickOutSide from '~/*/utils/custom-hooks/clickOutSide';
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
  const clickWhenShowFilter = ({target}) => {
    if (!showFilter) return;
    const result = [...dropdownRef.current.children].filter(
      (children) => children === target,
    );
    if (result.length === 0) {
      setShowFilter(false);
      return;
    }
    /**
     * @TODO
     * input value 바꾸기.....
     */
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
          filterList={filterList}
          showFilter={showFilter}
          dropdownRef={dropdownRef}
          clickWhenShowFilter={clickWhenShowFilter}
        ></FilterDropdown>
      )}
      <FilterInputBox
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        inputFocused={inputFocused}
      ></FilterInputBox>
    </FilterWrapper>
  );
};

export default Filter;
