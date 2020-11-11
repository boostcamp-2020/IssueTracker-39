import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.color ? props.color : '#efefef')};
  color: ${(props) => (props.textColor ? props.textColor : 'black')};
  border-radius: 3px;
  border: 1px solid lightgray;
  padding: 8px 14px;
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
`;

const CommonButton = ({
  color,
  textColor,
  children,
  fontSize = '15px',
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      color={color}
      textColor={textColor}
      fontSize={fontSize}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
