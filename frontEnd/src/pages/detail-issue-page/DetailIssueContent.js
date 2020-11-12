import React, {useMemo, useState, useEffect} from 'react';
import styled from 'styled-components';
import authorImage from '~/*/images/author.png';

import {calcBeforeTime} from '~/*/utils/timeManager';
import DetailIssueComment from './DetailIssueComment';
import splitTextAndImageInText from '~/*/utils/splitTextAndImageInText';

import DetailIssueCommentEdit from './DetailIssueCommentEdit';
import axiosMaker from '~/*/utils/axios/axiosMaker';
import parseJwt from '~/*/utils/parseJwt';
import Comment from './DetailIssueComment';

const ContextWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
`;

const IssueContextWrapper = styled.div`
  margin-left: 20px;
  width: 100%;
  border: 1px solid rgb(127, 129, 129);
  border-radius: 5px;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const BtnFooter = styled.div`
  margin-left: auto;
`;

const CancelBtn = styled.button`
  all: unset;
  border: 1px solid rgb(127, 129, 129);
  background-color: #f3f4f6;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  color: #cb2431;
`;
const UpdateCommentBtn = styled.button`
  all: unset;
  border: 1px solid #28a745;
  background-color: #28a745;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  color: #fff;
`;
const buttonLockStyle = {
  border: '1px solid rgb(0,0,0)',
  backgroundColor: 'rgba(0,0,0,0.5)',
  opacity: 0.5,
};

const buttonStyle = {
  border: '1px solid #28a745',
  backgroundColor: '#28a745',
  opacity: 1,
};
const DetailIssueBody = ({idx, user, content, createdTime, onChange, flag}) => {
  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState('');
  const [buttonLock, seButtonLock] = useState(buttonLockStyle);

  let ownUser = parseJwt(localStorage.getItem('token')).userId;

  useEffect(() => {
    if (editContent.length === 0) {
      seButtonLock(buttonLockStyle);
    } else {
      seButtonLock(buttonStyle);
    }
  }, [editContent]);

  const getContent = (content) => {
    setEditContent(content);
  };

  const onUpdateComment = () => {
    if (editContent.length == 0) {
      return;
    }
    let body = {content: editContent};
    let APIURL = '';
    if (flag === 'issue') {
      APIURL = `api/issue/content/${idx}`;
    } else APIURL = `api/comment/${idx}`;

    axiosMaker()
      .put(APIURL, body)
      .then(() => {
        onChange();
        setEditContent('');
        setEdit(!edit);
      });
  };

  const editClick = () => {
    setEdit(!edit);
  };

  let changeBackgroundStyle = {};
  if (ownUser === user) {
    changeBackgroundStyle.backgroundColor = '#f1f8ff';
  } else {
    changeBackgroundStyle.backgroundColor = '#e1e4e8';
  }

  const contentWithImage = useMemo(() => {
    return splitTextAndImageInText(content);
  }, [content]);

  return (
    <>
      <ContextWrapper>
        <AuthorImage src={authorImage} />
        <IssueContextWrapper>
          {edit ? (
            <>
              <DetailIssueCommentEdit
                getContent={getContent}
                edit={edit}
                initValue={content}
              />

              <div style={{display: 'flex'}}>
                <BtnFooter>
                  <CancelBtn onClick={editClick}>Cancel</CancelBtn>
                  <UpdateCommentBtn
                    style={buttonLock}
                    onClick={onUpdateComment}
                  >
                    Update comment
                  </UpdateCommentBtn>
                </BtnFooter>
              </div>
            </>
          ) : (
            <>
              <Comment
                ownUser={ownUser === user}
                editClick={editClick}
                changeBackgroundStyle={changeBackgroundStyle}
                createdTime={createdTime}
                content={contentWithImage}
                user={user}
              />
            </>
          )}
        </IssueContextWrapper>
      </ContextWrapper>
    </>
  );
};

export default DetailIssueBody;
