import React, {useState} from 'react';
import styled from 'styled-components';
import authorImage from '~/*/images/author.png';
import DetailIssueCommentEdit from './DetailIssueCommentEdit';
import parseJwt from '~/*/utils/parseJwt';
import Comment from './DetailIssueComment';

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
  backgroud-color: #f3f4f6;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  color: #cb2431;
`;
const UdpateCommentBtn = styled.button`
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

  return (
    <>
      <ContextWaapper>
        <AuthorImage src={authorImage} />
        <IssueContextWaapper>
          {edit ? (
            <>
              <DetailIssueCommentEdit />
              <div style={{display: 'flex'}}>
                <BtnFooter>
                  <CancelBtn onClick={editClick}>Cancel</CancelBtn>
                  <UdpateCommentBtn>Update comment</UdpateCommentBtn>
                </BtnFooter>
              </div>
            </>
          ) : (
            <>
              <Comment
                ownUser={ownUser === user}
                editClick={editClick}
                changeBackgroundStyel={changeBackgroundStyel}
                createdTime={createdTime}
                content={content}
                user={user}
              />
            </>
          )}
        </IssueContextWaapper>
      </ContextWaapper>
    </>
  );
};

export default DetailIssueBody;
