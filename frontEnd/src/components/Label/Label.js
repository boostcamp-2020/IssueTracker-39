import React from 'react';
import styled from 'styled-components';

const LabelStyle = styled.span`
  box-sizing: border-box;
  height: 1rem;
  padding: 0.1em 0.3em;
  background-color: ${(props) => props.labelColor || 'gray'};
  color: white;
  font-size: 0.8rem;
  border-radius: 3px;
`;

const Label = ({labelTitle, labelColor}) => {
  return <LabelStyle labelColor={labelColor}>{labelTitle}</LabelStyle>;
};

export default Label;
