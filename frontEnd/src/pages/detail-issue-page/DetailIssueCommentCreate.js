import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Comment from './DetailIssueCommentEdit';
import authorImage from '~/*/images/author.png';
import ClosedIcon from '~/*/images/closed';
import axiosMaker from '~/*/utils/axios/axiosMaker';
import parseJwt from '~/*/utils/parseJwt';
const CommentWrapper = styled.div`
  display: flex;
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

const BtnFooter = styled.div`
  margin-left: auto;
`;
const OpenCloseIssueBtn = styled.button`
  all: unset;
  border: 1px solid rgb(127, 129, 129);
  backgroud-color: #f3f4f6;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
`;

const CommentBtn = styled.button`
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

const ClosedImg = styled.span`
  filter: invert(19%) sepia(72%) saturate(3060%) hue-rotate(340deg)
    brightness(93%) contrast(94%);
`;

const DetailIssueCommentCreate = ({status, idx, onChange}) => {
  const [content, setContent] = useState('');
  const [edit, setEdit] = useState(false);
  const ownUser = parseJwt(localStorage.getItem('token')).idx;
  const getContent = (content) => {
    setContent(content);
  };

  const onSubmit = () => {
    let body = {
      issueIdx: idx,
      authorIdx: ownUser,
      content: content,
    };
    axiosMaker()
      .post('api/comment/', body)
      .then(() => {
        onChange();
        setContent('');
        setEdit(!edit);
      });
    // console.log(content);
  };

  return (
    <>
      <CommentWrapper>
        <AuthorImage src={authorImage} />
        <Waapper>
          <Comment getContent={getContent} edit={edit} initValue={''}>
            {' '}
          </Comment>
          <div style={{display: 'flex'}}>
            <BtnFooter>
              {status ? (
                <>
                  <OpenCloseIssueBtn>
                    <ClosedImg>
                      <ClosedIcon />
                    </ClosedImg>
                    &nbsp; Close issue
                  </OpenCloseIssueBtn>
                </>
              ) : (
                <>
                  <OpenCloseIssueBtn>Reopen issue</OpenCloseIssueBtn>
                </>
              )}

              <CommentBtn onClick={onSubmit}>Comment</CommentBtn>
            </BtnFooter>
          </div>
        </Waapper>
      </CommentWrapper>
    </>
  );
};

export default DetailIssueCommentCreate;
