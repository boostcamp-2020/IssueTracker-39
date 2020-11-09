import React from 'react';
import styled from 'styled-components';
import Label from '~/*/components/label/Label';

const contentLeftPadding = '20px';

const LabelItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  border-top: 1px solid lightgray;
  padding-left: ${contentLeftPadding};
`;
const LabelItemLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
`;
const LabelContainer = styled.div`
  width: 30%;
`;
const LabelDescription = styled.div``;
const LabelItemBtnLayout = styled.div`
  .btn {
    border: none;
    outline: none;
    background-color: transparent;
    padding-right: ${contentLeftPadding};
    cursor: pointer;
    &:hover {
      text-decoration: underline #54b4f1;
      color: #54b4f1;
    }
  }
`;

const LabelItem = ({data}) => {
  const {title, color, description} = data;
  return (
    <LabelItemLayout>
      <LabelItemLeft>
        <LabelContainer>
          <Label title={title} color={color} />
        </LabelContainer>
        <LabelDescription className="label-page-description">
          {description}
        </LabelDescription>
      </LabelItemLeft>
      <LabelItemBtnLayout>
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </LabelItemBtnLayout>
    </LabelItemLayout>
  );
};

export default LabelItem;