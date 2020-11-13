import React from 'react';
import styled from 'styled-components';
import EmojiIcon from '~/*/images/emoji';
import {calcBeforeTime} from '~/*/utils/timeManager';

const DetailIssueContentHeader = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  border: 1px solid rgb(127, 129, 129);
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

const Author = styled.span`
  font-weight: bold;
`;

const DetailIssueComment = ({
  ownUser,
  editClick,
  changeBackgroundStyle,
  createdTime,
  content,
  user,
}) => {
  return (
    <>
      <DetailIssueContentHeader style={changeBackgroundStyle}>
        <Author>{user}&nbsp; </Author>
        <span>{calcBeforeTime(createdTime)}</span>

        <HeaderButtonWrapper>
          <UnsetButton>
            <EmojiIcon />
          </UnsetButton>
          {ownUser ? (
            <UnsetButton onClick={editClick}>Edit</UnsetButton>
          ) : (
            <></>
          )}
        </HeaderButtonWrapper>
      </DetailIssueContentHeader>
      <DetailIssueContentBody>{content}</DetailIssueContentBody>
    </>
  );
};

export default DetailIssueComment;
