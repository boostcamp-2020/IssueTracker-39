import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {LabelModelContext} from '~/*/models/LabelModel';
import Label from '~/*/components/label/Label';
import LabelInputBox from './LabelInputBox';
import {getRandomColor} from '~/*/utils/getRandomColor';

const initialState = {
  title: '',
  color: '#bfd4f2',
  description: '',
};

const LabelFormLayout = styled.div`
  background-color: #f6f8fa;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const LabelLayout = styled.div`
  margin: 20px 10px;
`;

const LabelInputBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelForm = ({hideLabelForm}) => {
  const {requestApiManager} = useContext(LabelModelContext);
  const [inputs, setInputs] = useState(initialState);
  const {title, description, color} = inputs;

  const onChange = ({target}) => {
    const {name, value} = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const reset = () => {
    hideLabelForm();
    setInputs(initialState);
  };
  const onCreate = () => {
    requestApiManager.requestCreate({title, description, color});
    reset();
  };
  const setRandomColor = () => {
    setInputs({
      ...inputs,
      color: getRandomColor(),
    });
  };

  return (
    <LabelFormLayout>
      <LabelLayout>
        <Label title={title || 'Label Preview'} color={color} />
      </LabelLayout>
      <LabelInputBoxLayout>
        <LabelInputBox
          inputs={inputs}
          onSubmit={onCreate}
          onChange={onChange}
          reset={reset}
          setRandomColor={setRandomColor}
          buttonName={'Create label'}
        />
      </LabelInputBoxLayout>
    </LabelFormLayout>
  );
};

export default LabelForm;
