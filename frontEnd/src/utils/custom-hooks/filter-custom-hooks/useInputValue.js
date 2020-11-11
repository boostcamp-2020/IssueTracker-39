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
  return {inputValue, setInputValue, dropdownClickHandler};
};
export default useInputValue;
