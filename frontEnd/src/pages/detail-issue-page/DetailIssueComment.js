import React from 'react';
import styled from 'styled-components';
import {
  SectionWriteTitle,
  NewIssueContent,
  NewIssueContentWrapper,
} from '~/*/components/create-issue/NewIssueContent';

import authorImage from '~/*/images/author.png';
import AttachImage from '~/*/components/create-issue/AttachImage';

const CommnetWrapper = styled.div`
  display: flex;
`;

const WriteWrapper = styled.div`
  border: 1px solid rgb(127, 129, 129);
  background-color: #f6f8fa;
  padding-top: 10px;
  border-radius: 5px;
  border-style: none none none none;
`;
const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const Waapper = styled.div`
  margin-left: 20px;
  width: 100%;
  border: 1px solid rgb(127, 129, 129);
  border-radius: 5px;
`;

const DetailIssueComment = () => {
  // 몇 번째 글인지 알아야하니까 /:idx 로 요청해서 하나 가져오고
  // /list/:issueIdx 로 댓글도 가져오고
  return (
    <>
      <CommnetWrapper>
        <AuthorImage src={authorImage} />
        <Waapper>
          <WriteWrapper>
            <SectionWriteTitle>Write</SectionWriteTitle>
          </WriteWrapper>
          <NewIssueContentWrapper>
            <NewIssueContent placeholder="Leave a comment"></NewIssueContent>
            <AttachImage>Attach files by selecting here</AttachImage>
          </NewIssueContentWrapper>
          {/* <NewIssueBtnFooter>
            <button>Close issue</button>
            <button>commnet</button>
          </NewIssueBtnFooter> */}
        </Waapper>
      </CommnetWrapper>
    </>
  );
};

export default DetailIssueComment;
