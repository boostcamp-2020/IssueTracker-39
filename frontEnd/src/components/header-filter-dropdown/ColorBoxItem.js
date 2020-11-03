import React from 'react';
import styled from 'styled-components';
const Box = styled.div`
  background-color: ${(props) => props.color};
  width: 10px;
  height: 10px;
  margin-right: 5px;
`;
const ColorBoxItem = ({color}) => {
  return <Box color={color} />;
};

export default ColorBoxItem;
