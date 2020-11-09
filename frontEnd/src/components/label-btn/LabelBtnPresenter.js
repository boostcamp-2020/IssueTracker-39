import React from 'react';
import styled from 'styled-components';
import IconLabel from '~/*/images/label';
import {Link} from 'react-router-dom';

const LabelWrapper = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid #efefef;
  padding: 8px 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  border-radius: 3px 0px 0px 3px;
  margin-right: -1px;
  #icon__label {
    margin-right: 10px;
  }
`;

const CountBack = styled.div`
  border: 1px solid rgb(232, 234, 236);
  background-color: rgb(232, 234, 236);
  border-radius: 50px;
  padding: 0px 5px;
  margin: 0px 8px;
  font-size: 14px;
`;

const LabelBtnPresenter = ({count}) => {
  return (
    <Link to="/label">
      <LabelWrapper>
        <IconLabel />
        Labels
        <CountBack>{count}</CountBack>
      </LabelWrapper>
    </Link>
  );
};

export default LabelBtnPresenter;
