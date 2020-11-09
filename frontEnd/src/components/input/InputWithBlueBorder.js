import React, {useState} from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
  width: 100%;
  height: 25px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 10px;
  outline: ${(props) => (props.inputFocused ? 'none' : '')};
  box-shadow: ${(props) =>
    props.inputFocused ? '0 0 2px 2px lightskyblue' : ''};
`;

const InputWithBlueBorder = (params) => {
  const {type, name, value, placeholder, onChange, onClick} = params;
  const [inputFocused, setInputFocused] = useState(false);
  const onFocus = () => {
    setInputFocused(true);
  };
  const onBlur = () => {
    setInputFocused(false);
  };
  return (
    <InputWrapper
      type={type || 'text'}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      inputFocused={inputFocused}
      placeholder={placeholder}
    />
  );
};

export default InputWithBlueBorder;
