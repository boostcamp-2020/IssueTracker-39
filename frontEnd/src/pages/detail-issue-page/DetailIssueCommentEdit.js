import React, {useContext, useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import {
  SectionWriteTitle,
  NewIssueContent,
  NewIssueContentWrapper,
  CharactersCounter,
} from '~/*/components/create-issue/NewIssueContent';
import {TextareaModelContext} from '../../models/TextareaModel';
import AttachImage from '~/*/components/create-issue/AttachImage';
import imageInputCustomHooks from '~/*/utils/custom-hooks/imageInputCustomHooks/imageInputCustomHooks';

const WriteWrapper = styled.div`
  border: 1px solid rgb(127, 129, 129);
  background-color: #f6f8fa;
  padding-top: 10px;
  border-radius: 5px;
  border-style: none none none none;
`;

const HiddenInput = styled.input`
  width: 0px;
  height: 0px;
  visibility: hidden;
`;

const DetailIssueCommentEdit = ({getContent, edit, initValue}) => {
  const {setCounterWithTextareaLength, visibility, counter} = useContext(
    TextareaModelContext,
  );
  const [value, setValue] = useState(initValue);

  const {
    imageInputRef,
    clickFileSelectingArea,
    imageFileChange,
  } = imageInputCustomHooks(setValue);

  useEffect(() => {
    setValue(initValue);
  }, [edit]);

  const changeInputValue = (e) => {
    getContent(e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <WriteWrapper>
        <SectionWriteTitle>Write</SectionWriteTitle>
      </WriteWrapper>
      <NewIssueContentWrapper>
        <NewIssueContent
          value={value}
          placeholder="Leave a comment"
          onKeyUp={setCounterWithTextareaLength}
          onChange={changeInputValue}
        ></NewIssueContent>
        <CharactersCounter visibility={visibility}>
          {counter} characters
        </CharactersCounter>
        <AttachImage onClick={clickFileSelectingArea}>
          Attach files by selecting here
        </AttachImage>
        <HiddenInput
          type={'file'}
          onChange={imageFileChange}
          ref={imageInputRef}
        />
      </NewIssueContentWrapper>
    </>
  );
};

export default DetailIssueCommentEdit;
