import React, {useContext} from 'react';
import styled from 'styled-components';
import {LabelModelContext} from '~/*/models/LabelModel';
import LabelItem from '~/*/components/label/LabelItem';

const LabelListStyle = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
`;
const LabelListHeader = styled.div`
  height: 45px;
  background-color: #f6f8fa;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;

const LabelList = () => {
  const {store, dispatch} = useContext(LabelModelContext);
  return (
    <LabelListStyle>
      <LabelListHeader>{store.length} Labels</LabelListHeader>
      {store.map((data) => (
        <LabelItem key={data.idx} data={data}></LabelItem>
      ))}
    </LabelListStyle>
  );
};

export default LabelList;
