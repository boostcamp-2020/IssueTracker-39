import React from 'react';
import styled from 'styled-components';

import {
  SubmitNewIssueBtn,
  NewIssueBtnFooter,
  CancelBtn,
} from './NewIssueBtnFooter';
import AttachImage from './AttachImage';
import NewIssueTitle from './NewIssueTitle';
import {
  SectionWriteTitle,
  NewIssueContent,
  NewIssueContentWrapper,
} from './NewIssueContentComponent';

const CreateNewIssueFormWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  width: 75%;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const CreateNewIssueForm = () => {
  return (
    <>
      <CreateNewIssueFormWrapper>
        <NewIssueTitle placeholder="Title" />
        <SectionWriteTitle>Write</SectionWriteTitle>
        <NewIssueContentWrapper>
          <NewIssueContent placeholder="Leave a comment"></NewIssueContent>
          <AttachImage>Attach files by selecting here</AttachImage>
        </NewIssueContentWrapper>
        <NewIssueBtnFooter>
          <CancelBtn>Cancel</CancelBtn>
          <SubmitNewIssueBtn>Submit new issue</SubmitNewIssueBtn>
        </NewIssueBtnFooter>
      </CreateNewIssueFormWrapper>
    </>
  );
};

export default CreateNewIssueForm;
