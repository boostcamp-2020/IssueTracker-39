import {useState} from 'react';

const useBtnHovered = (initialState) => {
  const [btnHovered, setbtnHovered] = useState(initialState);
  const btnHover = () => {
    setbtnHovered(true);
  };
  const btnNotHover = () => {
    setbtnHovered(false);
  };

  return {btnHovered, btnHover, btnNotHover};
};
export default useBtnHovered;
