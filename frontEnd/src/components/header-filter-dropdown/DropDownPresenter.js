import React from 'react';
import styled from 'styled-components';
import DropDownItem from './DropDownItem';
const Wrapper = styled.ul`
  position: absolute;
  bottom: 0%;
  left: 0%;
  transform: translateY(100%);
  box-shadow: 2px 2px 2px lightgray;
  border: 1px solid lightgray;
  background-color: #ffffff;
`;
const DropDownHeader = styled.li`
  background-color: #f7f8fa;
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
`;

const dummyTitle = ['bug', 'feature', 'good first issue'];
const dummyDescription = [
  "Something isn't working",
  'New feature or request',
  'Good for newcomers',
];
const dummyColor = ['red', 'green', 'blue'];

const HeaderFilterDropDown = ({dropDownName}) => {
  return (
    <Wrapper>
      <DropDownHeader>{dropDownName}</DropDownHeader>
      {dummyTitle.map((title, id) => (
        <DropDownItem
          title={title}
          key={id}
          description={dummyDescription[id]}
          color={dummyColor[id]}
        />
      ))}
    </Wrapper>
  );
};

export default HeaderFilterDropDown;
