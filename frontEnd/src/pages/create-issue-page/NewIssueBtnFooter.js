import React from 'react';
import styled from 'styled-components';

const NewIssueBtnFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
`;

const CancelBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

const SubmitNewIssueBtn = styled.button`
  background-color: rgb(46, 164, 79);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  box-shadow: -1px -1.5px 2px lightgray;
`;

export {SubmitNewIssueBtn, NewIssueBtnFooter, CancelBtn};
