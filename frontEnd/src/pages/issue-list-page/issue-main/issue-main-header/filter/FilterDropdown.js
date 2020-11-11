import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';

const FilterDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
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
        <button value={filter} key={index}>
          {filter}
        </button>
      ))}
    </FilterDropdownWrapper>
  );
};

export default FilterDropdown;
