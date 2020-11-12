import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';

const FilterDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 35px;
  border-radius: 7px;
  border: 1px solid lightgray;
  overflow: hidden;
`;
const FilterDropdownBtn = styled.button`
  background-color: white;
  border: none;
  padding: 7px 5px;
  &:hover {
    background-color: #f6f8fa;
  }
`;
const FilterDropdown = ({
  filterList,
  dropdownVisibility,
  dropdownRef,
  dropdownClickHandler,
}) => {
  useEffect(() => {
    document.addEventListener('click', dropdownClickHandler);
    return () => {
      document.removeEventListener('click', dropdownClickHandler);
    };
  }, [dropdownVisibility]);

  return (
    <FilterDropdownWrapper ref={dropdownRef}>
      {filterList.map((filter, index) => (
        <FilterDropdownBtn value={filter} key={index}>
          {filter}
        </FilterDropdownBtn>
      ))}
    </FilterDropdownWrapper>
  );
};

export default FilterDropdown;
