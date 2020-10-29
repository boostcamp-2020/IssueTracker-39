import React from 'react';
import styled from 'styled-components';

const FilterDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
`;

const FilterDropdown = ({filterList, showFilter}) => {
  return showFilter ? (
    <FilterDropdownWrapper>
      {filterList.map((filter, index) => (
        <button value={filter} key={index}>
          {filter}
        </button>
      ))}
    </FilterDropdownWrapper>
  ) : (
    ''
  );
};

export default FilterDropdown;
