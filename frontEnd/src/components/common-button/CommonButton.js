import React, {Children} from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.color ? props.color : '#efefef')};
  color: ${(props) => (props.textColor ? props.textColor : 'black')};
  border: 1px solid lightgray;
  padding: 7px 10px;
  font-weight: bold;
`;
const CommonButton = ({color, textColor, children}) => {
  return (
    <Button color={color} textColor={textColor}>
      {children}
    </Button>
  );
};

export default CommonButton;
