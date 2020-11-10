import React from 'react';
import styled from 'styled-components';
import Open from '~/*/components/open-close-lable/Open';
import Closed from '~/*/components/open-close-lable/Close';
import {calcBeforeTime} from '~/*/utils/timeManager';

const TitleHeader = styled.div`
  display: flex;
  align-items: center;
`;

const Headding = styled.div`
  font-size: 36px;
`;

const HeaderDescription = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
`;

const EditBtn = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid rgb(127, 129, 129);
  backgroud-color: #f3f4f6;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: auto;
  font-size: 12px;
  font-weight: bold;
`;

const Author = styled.span`
  font-weight: bold;
`;

const DetailIssueHeader = ({
  title,
  idx,
  createdTime,
  author,
  status,
  count,
}) => {
  let OpenClosed;
  if (status) OpenClosed = <Open></Open>;
  else OpenClosed = <Closed></Closed>;

  return (
    <>
      <TitleHeader>
        <Headding>
          {(title = title)}
          {`#${(idx = idx)}`}
        </Headding>

        <EditBtn onClick={null}>Edit</EditBtn>
      </TitleHeader>
      <HeaderDescription>
        {OpenClosed}
        <Author>&nbsp;{author}&nbsp; </Author>
        <span>
          opened this issue {calcBeforeTime(createdTime)} {count} comment
        </span>
      </HeaderDescription>
      <hr></hr>
    </>
  );
};

export default DetailIssueHeader;
