import React, {useState} from 'react';
import styled from 'styled-components';

import InputWithBlueBorder from '~/*/components/input/InputWithBlueBorder';
import randomBtnImage from '~/*/images/randomImage.png';

const btnDisableColor = 'rgb(148, 211, 162)';
const btnActiveColor = 'rgb(46, 164, 79)';
const btnHoverColor = '#2c974b';
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
    background-color: ${(props) =>
      props.buttonDisabled ? btnDisableColor : btnActiveColor};

    &:hover {
      ${(props) =>
        !props.buttonDisabled && `background-color: ${btnHoverColor} `}
    }
  }
`;

const ColorInputLayout = styled.div`
  display: flex;
  flex-direction: row;
`;
const RandomImage = styled.img`
  cursor: pointer;
  margin: 10px 5px 0 0;
  padding: 1px 4px;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => props.color || 'transparent'};
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

const LabelInputBox = ({
  inputs,
  onSubmit,
  onChange,
  setRandomColor,
  reset,
  buttonName,
}) => {
  const {idx, title, description, color} = inputs;
  const [buttonDisabled, setButtonDisabled] = useState(title.length < 1);
  const activeButton = ({target}) => {
    const inputLength = target.value.length;
    setButtonDisabled(inputLength > 0 ? false : true);
  };
  const onChangeHandler = (e, idx) => {
    onChange(e, idx);
    activeButton(e);
  };

  return (
    <LabelInputLayout>
      <InputLayout>
        <TitleLabel>
          Label Name
          <InputWithBlueBorder
            name="title"
            value={title}
            placeholder="Label name"
            onChange={(e) => onChangeHandler(e, idx)}
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
          <ColorInputLayout>
            <RandomImage
              src={randomBtnImage}
              onClick={() => setRandomColor(idx)}
              color={color}
            ></RandomImage>
            <InputWithBlueBorder
              name="color"
              value={color}
              onChange={(e) => onChange(e, idx)}
            />
          </ColorInputLayout>
        </ColorLabel>
      </InputLayout>
      <ButtonLayout buttonDisabled={buttonDisabled}>
        <Btn onClick={(e) => reset(e, idx)} className="cancel_btn">
          Cancel
        </Btn>
        <Btn
          disabled={buttonDisabled}
          onClick={() => onSubmit(idx)}
          className="create_btn"
        >
          {buttonName}
        </Btn>
      </ButtonLayout>
    </LabelInputLayout>
  );
};

export default LabelInputBox;
