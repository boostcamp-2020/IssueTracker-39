import {useState} from 'react';

const useInputValue = ({
  initialState,
  dropdownVisibility,
  dropdownRef,
  hideDropdown,
  filterList,
}) => {
  const [inputValue, setInputValue] = useState(initialState);

  const dropdownClickHandler = ({target}) => {
    if (!dropdownVisibility) return;
    const result = [...dropdownRef.current.children].filter(
      (children) => children === target,
    );
    if (result.length === 0) {
      hideDropdown();
      return;
    }
    setInputValue(filterList[target.value]);
    hideDropdown();
  };
  const clearInputValue = () => {
    setInputValue(initialState);
  };
  return {inputValue, setInputValue, dropdownClickHandler, clearInputValue};
};
export default useInputValue;
