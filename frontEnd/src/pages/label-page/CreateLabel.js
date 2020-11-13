import React from 'react';
import styled from 'styled-components';

const CreateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  padding: 0 10px;
  color: white;
  font-weight: bold;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: rgb(46, 164, 79);
  &:hover {
    background-color: #2c974b;
  }
`;

const CreateLabel = ({showLabelForm}) => {
  return <CreateButton onClick={showLabelForm}>New Label</CreateButton>;
};

export default CreateLabel;
