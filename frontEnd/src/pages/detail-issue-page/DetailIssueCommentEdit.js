import React from 'react';
import styled from 'styled-components';
import {
  SectionWriteTitle,
  NewIssueContent,
  NewIssueContentWrapper,
} from '~/*/components/create-issue/NewIssueContent';

import AttachImage from '~/*/components/create-issue/AttachImage';

const WriteWrapper = styled.div`
  border: 1px solid rgb(127, 129, 129);
  background-color: #f6f8fa;
  padding-top: 10px;
  border-radius: 5px;
  border-style: none none none none;
`;

const DetailIssueCommentEdit = () => {
  // 몇 번째 글인지 알아야하니까 /:idx 로 요청해서 하나 가져오고
  // /list/:issueIdx 로 댓글도 가져오고
  return (
    <>
      <WriteWrapper>
        <SectionWriteTitle>Write</SectionWriteTitle>
      </WriteWrapper>
      <NewIssueContentWrapper>
        <NewIssueContent placeholder="Leave a comment"></NewIssueContent>
        <AttachImage>Attach files by selecting here</AttachImage>
      </NewIssueContentWrapper>
    </>
  );
};

export default DetailIssueCommentEdit;
