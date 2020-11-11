import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {
  SectionWriteTitle,
  NewIssueContent,
  NewIssueContentWrapper,
  CharactersCounter,
} from '~/*/components/create-issue/NewIssueContent';
import {TextareaModelContext} from '../../models/TextareaModel';
import AttachImage from '~/*/components/create-issue/AttachImage';

const WriteWrapper = styled.div`
  border: 1px solid rgb(127, 129, 129);
  background-color: #f6f8fa;
  padding-top: 10px;
  border-radius: 5px;
  border-style: none none none none;
`;

const DetailIssueCommentEdit = ({getContent, edit, initValue}) => {
  const {setCounterWithTextareaLength, visibility, counter} = useContext(
    TextareaModelContext,
  );
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    // setValue('');
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
        <AttachImage>Attach files by selecting here</AttachImage>
      </NewIssueContentWrapper>
    </>
  );
};

export default DetailIssueCommentEdit;
