import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Open from '~/*/components/open-close-lable/Open';
import Closed from '~/*/components/open-close-lable/Close';
import {calcBeforeTime} from '~/*/utils/timeManager';
import axiosMaker from '~/*/utils/axios/axiosMaker';

const TitleHeader = styled.div`
  width: 100%;
  display: flex;
  flex-basis: 500px;
  flex-shrink:1
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
  font-size: 14px;
  font-weight: bold;
`;

const EditDiv = styled.div`
  margin-left: auto;
  height: 100%;
`;

const Author = styled.span`
  font-weight: bold;
`;

const EditBox = styled.input`
  display: inline;
  font-size: 24px;
`;

const CancelBtn = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  color: blue;
`;

const DetailIssueHeader = ({
  title,
  idx,
  createdTime,
  author,
  status,
  count,
  onChange,
}) => {
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(title);

  const editClick = () => {
    setEdit(!edit);
    setInputValue(title);
  };

  const updateClick = () => {
    setEdit(!edit);
    let body = {
      title: inputValue,
    };

    axiosMaker()
      .put(`api/issue/title/${idx}`, body)
      .then(({data}) => {
        if (data) {
          setEdit(!edit);
          onChange();
        }
      });
  };

  useEffect(() => {
    setInputValue(inputValue);
  }, [inputValue]);

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  let OpenClosed;
  if (status) OpenClosed = <Open></Open>;
  else OpenClosed = <Closed></Closed>;

  return (
    <>
      <TitleHeader>
        {edit ? (
          <>
            <Headding>
              <EditBox value={inputValue} onChange={changeInputValue}></EditBox>
            </Headding>
            <EditDiv>
              <EditBtn onClick={updateClick}>save</EditBtn>
              <CancelBtn onClick={editClick}>cancel</CancelBtn>
            </EditDiv>
          </>
        ) : (
          <>
            <Headding>
              {title}
              {`#${idx}`}
            </Headding>
            <EditDiv>
              <EditBtn onClick={editClick}>Edit</EditBtn>
            </EditDiv>
          </>
        )}
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
