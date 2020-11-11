import React from 'react';
import styled from 'styled-components';

const CheckBoxLayout = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input.attrs({
  type: 'checkbox',
})``;

const CheckSelectCount = styled.span`
  margin-left: 20px;
  font-size: 16px;
  color: #858585;
`;
const CheckBoxWithPreseter = ({
  checkBoxClick,
  selectedCount,
  selectCheck,
  reference,
}) => {
  return (
    <CheckBoxLayout>
      <CheckBox
        className="checkbox__all"
        onChange={checkBoxClick}
        checked={selectCheck}
      ></CheckBox>
      <CheckSelectCount ref={reference} value={selectedCount}>
        {selectedCount} selected
      </CheckSelectCount>
    </CheckBoxLayout>
  );
};

export default CheckBoxWithPreseter;
