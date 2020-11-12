import React from 'react';
import styled from 'styled-components';
import DropDownItem from './DropDownItem';

import useDropDownPresenter from '~/*/utils/custom-hooks/dropdown-custom-hooks/useDropDownPresenter';
import useMarkAsDropdown from '~/*/utils/custom-hooks/dropdown-custom-hooks/useMarkAsDropdown';

const Wrapper = styled.ul`
  position: absolute;
  bottom: 0%;
  right: 0%;
  width: 300px;
  max-height: 400px;
  overflow-y: scroll;
  transform: translateY(102%);
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

const HeaderFilterDropDown = ({dropDownName, onClick}) => {
  const {runOnClick, dropDownItems, inputTitle} =
    dropDownName !== 'Mark As'
      ? useDropDownPresenter({
          dropDownName,
          onClick,
        })
      : useMarkAsDropdown({onClick});
  return (
    <Wrapper>
      <DropDownHeader>Filter by {dropDownName}</DropDownHeader>
      {dropDownItems.map((item, id) => (
        <DropDownItem
          onClick={runOnClick}
          title={item.title}
          key={id}
          description={item.description}
          color={item.color}
          parentName={dropDownName}
          selected={
            inputTitle
              ? inputTitle.replaceAll(`"`, '') === item.title
              : inputTitle === item.title
          }
        />
      ))}
    </Wrapper>
  );
};

export default HeaderFilterDropDown;
