import {useState} from 'react';

const setDropdownVisibility = (initialState) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(initialState);
  const filterOnClick = () => {
    setDropdownVisibility((state) => !state);
  };
  const hideDropdown = () => {
    setDropdownVisibility(false);
  };
  return {dropdownVisibility, filterOnClick, hideDropdown};
};

export default setDropdownVisibility;
