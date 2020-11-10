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
  showFilter,
  dropdownRef,
  clickWhenShowFilter,
}) => {
  useEffect(() => {
    document.addEventListener('click', clickWhenShowFilter);
    return () => {
      document.removeEventListener('click', clickWhenShowFilter);
    };
  }, [showFilter]);

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
