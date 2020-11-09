import React from 'react';
import styled from 'styled-components';
import EmojiIcon from '~/*/images/emoji';
import authorImage from '~/*/images/author.png';
const ContextWaapper = styled.div`
  margin-bottom: 50px;
  display: flex;
`;

const IssueContextWaapper = styled.div`
  margin-left: 20px;
  width: 100%;
  border: 1px solid rgb(127, 129, 129);
  border-radius: 5px;
`;

const DetailIssueContentHeader = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  border: 1px solid rgb(127, 129, 129);
  background-color: #f1f8ff;
  border-radius: 5px 5px 0px 0px;
  border-style: none none solid none;
`;

const DetailIssueContentBody = styled.div`
  padding: 20px;
`;

const HeaderButtonWrapper = styled.div`
  margin-left: auto;
`;

const UnsetButton = styled.button`
  all: unset;
  margin: 5px;
  cursor: pointer;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const DetailIssueBody = () => {
  return (
    <>
      <ContextWaapper>
        <AuthorImage src={authorImage} />
        <IssueContextWaapper>
          <DetailIssueContentHeader>
            <span>사용자 시간</span>
            <HeaderButtonWrapper>
              <UnsetButton>
                <EmojiIcon />
              </UnsetButton>
              <UnsetButton>Edit</UnsetButton>
            </HeaderButtonWrapper>
          </DetailIssueContentHeader>
          <DetailIssueContentBody>내용</DetailIssueContentBody>
        </IssueContextWaapper>
      </ContextWaapper>
    </>
  );
};

export default DetailIssueBody;
