import React, {useState} from 'react';
import styled from 'styled-components';
import Label from '~/*/components/label/Label';
import LabelInputBox from './LabelInputBox';

const initialState = {
  title: '',
  color: '#bfd4f2',
  description: '',
};

const LabelFormLayout = styled.div`
  background-color: #f6f8fa;
  margin: 10px 0;
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

const LabelForm = () => {
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
    setInputs(initialState);
  };

  return (
    <LabelFormLayout>
      <LabelLayout>
        <Label title={title || 'Label Preview'} color={color} />
      </LabelLayout>
      <LabelInputBoxLayout>
        <LabelInputBox
          inputs={inputs}
          onChange={onChange}
          reset={reset}
          buttonName={'Create label'}
        />
      </LabelInputBoxLayout>
    </LabelFormLayout>
  );
};

export default LabelForm;
