import React from 'react';
import styled from 'styled-components';

import InputWithBlueBorder from '~/*/components/input/InputWithBlueBorder';

const LabelInputLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;

const InputLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 75%;
`;
const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  width: 25%;
  height: 35px;
  .cancel_btn {
    background-color: #f3f4f6;
    &:hover {
      background-color: lightgray;
    }
  }
  .create_btn {
    color: white;
    background-color: rgb(46, 164, 79);
    &:hover {
      background-color: #2c974b;
    }
  }
`;

const TitleLabel = styled.div`
  width: 30%;
  margin: 0 10px;
`;
const DescLabel = styled.div`
  width: 40%;
  margin: 0 10px;
`;
const ColorLabel = styled.div`
  width: 20%;
  margin: 0 10px;
`;
const Btn = styled.button`
  margin: 0 10px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-weight: bold;
`;

const LabelInputBox = ({inputs, onChange, reset, buttonName}) => {
  const {idx, title, description, color} = inputs;
  return (
    <LabelInputLayout>
      <InputLayout>
        <TitleLabel>
          Label Name
          <InputWithBlueBorder
            name="title"
            value={title}
            placeholder="Label name"
            onChange={(e) => onChange(e, idx)}
          />
        </TitleLabel>
        <DescLabel>
          Description
          <InputWithBlueBorder
            name="description"
            value={description}
            placeholder="Description (Optional)"
            onChange={(e) => onChange(e, idx)}
          />
        </DescLabel>
        <ColorLabel>
          Color
          <InputWithBlueBorder
            name="color"
            value={color}
            onChange={(e) => onChange(e, idx)}
          />
        </ColorLabel>
      </InputLayout>
      <ButtonLayout>
        <Btn onClick={(e) => reset(e, idx)} className="cancel_btn">
          Cancel
        </Btn>
        <Btn className="create_btn">{buttonName}</Btn>
      </ButtonLayout>
    </LabelInputLayout>
  );
};

export default LabelInputBox;
