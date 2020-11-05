import React, {useContext} from 'react';
import styled, {keyframes} from 'styled-components';
import DropDownItem from './DropDownItem';
import {modelStore, Filter} from '~/*/models/store';

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

//description_title
const HeaderFilterDropDown = ({dropDownName, onClick}) => {
  const {store, getDropDownItem} = useContext(modelStore[dropDownName]);
  const {
    store: filterStore,
    actions: filterActions,
    dispatch: filterDispatch,
  } = useContext(modelStore.Filter);

  const runOnClickAndUpdateModel = (title) => {
    onClick();
    filterDispatch(filterActions[dropDownName](title));
  };

  const dropDownItems = getDropDownItem(store);
  // console.log(filterStore[dropDownName]===i)
  return (
    <Wrapper>
      <DropDownHeader>Filter by {dropDownName}</DropDownHeader>
      {dropDownItems.map((item, id) => (
        <DropDownItem
          onClick={runOnClickAndUpdateModel}
          title={item.title}
          key={id}
          description={item.description}
          color={item.color}
          parentName={dropDownName}
          selected={filterStore[dropDownName] === item.title}
        />
      ))}
    </Wrapper>
  );
};

export default HeaderFilterDropDown;
