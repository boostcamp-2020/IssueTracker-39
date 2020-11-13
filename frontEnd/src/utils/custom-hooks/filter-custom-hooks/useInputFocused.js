import {useState} from 'react';

const useInputFocused = (initialState) => {
  const [inputFocused, setInputFocused] = useState(initialState);
  const onInputFocus = () => {
    setInputFocused(true);
  };
  const onInputBlur = () => {
    setInputFocused(false);
  };
  return {inputFocused, onInputFocus, onInputBlur};
};
export default useInputFocused;
