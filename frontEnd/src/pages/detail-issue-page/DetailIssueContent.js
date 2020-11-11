import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import EmojiIcon from '~/*/images/emoji';
import authorImage from '~/*/images/author.png';
import {calcBeforeTime} from '~/*/utils/timeManager';
import DetailIssueComment from './DetailIssueComment';
import splitTextAndImageInText from '~/*/utils/splitTextAndImageInText';

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

const Author = styled.span`
  font-weight: bold;
`;

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );

  return JSON.parse(jsonPayload);
}

const DetailIssueBody = ({user, content, createdTime}) => {
  let ownUser = parseJwt(localStorage.getItem('token')).userId;
  const [edit, setEdit] = useState(false);

  const editClick = () => {
    setEdit(!edit);
  };

  ownUser = 'test';
  let changeBackgroundStyel = {};
  if (ownUser === user) {
    changeBackgroundStyel.backgroundColor = '#f1f8ff';
  } else {
    changeBackgroundStyel.backgroundColor = '#e1e4e8';
  }

  const contentWithImage = useMemo(() => {
    return splitTextAndImageInText(content);
  }, [content]);

  return (
    <>
      <ContextWaapper>
        <AuthorImage src={authorImage} />
        <IssueContextWaapper>
          {edit ? (
            <></>
          ) : (
            <>
              <DetailIssueContentHeader style={changeBackgroundStyel}>
                <Author>{user}&nbsp; </Author>
                <span>{calcBeforeTime(createdTime)}</span>

                <HeaderButtonWrapper>
                  <UnsetButton>
                    <EmojiIcon />
                  </UnsetButton>
                  {ownUser === user ? (
                    <UnsetButton onClick={editClick}>Edit</UnsetButton>
                  ) : (
                    <></>
                  )}
                </HeaderButtonWrapper>
              </DetailIssueContentHeader>
            </>
          )}

          {edit ? (
            <>
              <DetailIssueComment />
            </>
          ) : (
            <>
              <DetailIssueContentBody>
                {contentWithImage}
              </DetailIssueContentBody>
            </>
          )}
        </IssueContextWaapper>
      </ContextWaapper>
    </>
  );
};

export default DetailIssueBody;
