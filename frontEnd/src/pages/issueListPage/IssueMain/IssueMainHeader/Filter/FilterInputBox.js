import React from 'react';
import styled from 'styled-components';

import magnifierImage from '../../../../../images/magnifier.png';

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

const FilterInputBox = ({onFocus, onBlur, inputFocused}) => {
  return (
    <FilterInputBoxWrapper inputFocused={inputFocused}>
      <SpanWrapper>
        <img width="25px" src={magnifierImage}></img>
      </SpanWrapper>
      <InputWrapper
        type="text"
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        placeholder="Search All Issues"
      />
    </FilterInputBoxWrapper>
  );
};

export default FilterInputBox;
