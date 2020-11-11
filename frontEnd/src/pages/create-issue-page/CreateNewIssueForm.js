import React, {useContext, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

import {
  SubmitNewIssueBtn,
  NewIssueBtnFooter,
  CancelBtn,
} from './NewIssueBtnFooter';
import AttachImage from '../../components/create-issue/AttachImage';
import NewIssueTitle from './NewIssueTitle';
import {
  SectionWriteTitle,
  NewIssueContent,
  NewIssueContentWrapper,
  CharactersCounter,
} from '../../components/create-issue/NewIssueContent';
import {TextareaModelContext} from '../../models/TextareaModel';

const CreateNewIssueFormWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  width: 75%;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const HiddenInput = styled.input`
  width: 0px;
  height: 0px;
  visibility: hidden;
`;

const CreateNewIssueForm = () => {
  const {
    issueContent,
    issueContentChange,
    setCounterWithTextareaLength,
    visibility,
    counter,
    requests,
  } = useContext(TextareaModelContext);
  const {requestImageUpload} = requests;
  const history = useHistory();
  const imageInputRef = useRef();
  const clickFileSelectingArea = () => {
    imageInputRef.current.click();
  };

  const imageFileChange = (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    requestImageUpload(formData);
  };

  const goToHome = () => {
    history.replace('/');
  };

  return (
    <>
      <CreateNewIssueFormWrapper>
        <NewIssueTitle placeholder="Title" />
        <SectionWriteTitle>Write</SectionWriteTitle>
        <NewIssueContentWrapper>
          <NewIssueContent
            placeholder="Leave a comment"
            onKeyUp={setCounterWithTextareaLength}
            onChange={issueContentChange}
            value={issueContent}
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
        <NewIssueBtnFooter>
          <CancelBtn onClick={goToHome}>Cancel</CancelBtn>
          <SubmitNewIssueBtn>Submit new issue</SubmitNewIssueBtn>
        </NewIssueBtnFooter>
      </CreateNewIssueFormWrapper>
    </>
  );
};

export default CreateNewIssueForm;
